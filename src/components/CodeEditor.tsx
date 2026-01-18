import { useEffect, useState, useCallback } from "react";
import { codeToHtml } from "shiki";
import type { BundledLanguage, BundledTheme } from "shiki";
import { cn } from "@/lib/utils";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onPaste?: (pastedText: string) => void;
  language: BundledLanguage;
  theme: BundledTheme;
  className?: string;
  isExporting?: boolean;
}

export function CodeEditor({
  code,
  onChange,
  onPaste,
  language,
  theme,
  className,
  isExporting = false,
}: CodeEditorProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    const highlight = async () => {
      try {
        const html = await codeToHtml(code || " ", {
          lang: language,
          theme: theme,
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Highlighting error:", error);
        setHighlightedCode(`<pre><code>${escapeHtml(code)}</code></pre>`);
      }
    };

    highlight();
  }, [code, language, theme]);

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
      const pastedText = e.clipboardData.getData("text");
      if (pastedText && onPaste) {
        onPaste(pastedText);
      }
    },
    [onPaste]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      onChange(newCode);
      requestAnimationFrame(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      });
    }
  };

  return (
    <div
      className={cn(
        "relative font-mono text-sm group",
        "focus-within:!outline-none focus-within:!ring-0 focus-within:!shadow-none",
        "outline-none ring-0 border-none shadow-none",
        className
      )}
    >
      <div
        className={cn(
          "relative pointer-events-none",
          "p-0",
          "[&_pre]:m-0 [&_pre]:p-0 [&_pre]:bg-transparent! [&_pre]:overflow-hidden [&_pre]:whitespace-pre-wrap [&_pre]:break-all",
          "[&_code]:block [&_code]:min-h-full [&_code]:w-full"
        )}
        dangerouslySetInnerHTML={{
          __html: highlightedCode + "<br />",
        }}
        aria-hidden="true"
      />

      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        className={cn(
          "absolute inset-0 w-full h-full resize-none overflow-hidden",
          "bg-transparent text-transparent caret-white",
          "!outline-none !focus:outline-none !focus:ring-0 !border-none !p-0 !m-0 !shadow-none",
          "whitespace-pre-wrap break-all",
          "selection:bg-primary/30",
          isExporting && "hide-caret"
        )}
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        data-gramm="false"
        placeholder="Paste or type your code here..."
      />
    </div>
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}