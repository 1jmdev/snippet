import { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import { Download, Copy, Check } from "lucide-react";

import { CodeEditor } from "@/components/CodeEditor";
import { SnippetCard, type WindowStyle } from "@/components/SnippetCard";
import { LanguageSelect } from "@/components/LanguageSelect";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { themes, defaultTheme, type ThemeConfig } from "@/lib/themes";
import { defaultLanguage, detectLanguage, type LanguageConfig } from "@/lib/languages";

const DEFAULT_CODE = `function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");`;

const windowStyles: { id: WindowStyle; name: string }[] = [
  { id: "macos", name: "macOS" },
  { id: "minimal", name: "Minimal" },
];

export default function App() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [language, setLanguage] = useState<LanguageConfig>(defaultLanguage);
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [windowStyle, setWindowStyle] = useState<WindowStyle>("macos");
  const [isExporting, setIsExporting] = useState(false);
  const [copied, setCopied] = useState(false);

  const snippetRef = useRef<HTMLDivElement>(null);

  // Handle paste and auto-detect language
  const handlePaste = useCallback((pastedText: string) => {
    const detectedLang = detectLanguage(pastedText);
    if (detectedLang) {
      setLanguage(detectedLang);
    }
  }, []);

  const handleExport = useCallback(async () => {
    if (!snippetRef.current) return;

    setIsExporting(true);

    // Wait for state to update and re-render
    await new Promise((resolve) => setTimeout(resolve, 100));

    try {
      const dataUrl = await toPng(snippetRef.current, {
        pixelRatio: 2,
        backgroundColor: "transparent",
      });
      
      // Create download link
      const link = document.createElement("a");
      link.download = `snippet-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  }, []);

  const handleCopyToClipboard = useCallback(async () => {
    if (!snippetRef.current) return;

    setIsExporting(true);

    await new Promise((resolve) => setTimeout(resolve, 100));

    try {
      const dataUrl = await toPng(snippetRef.current, {
        pixelRatio: 2,
        backgroundColor: "transparent",
      });

      // Convert data URL to blob
      const response = await fetch(dataUrl);
      const blob = await response.blob();

      // Copy to clipboard
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    } finally {
      setIsExporting(false);
    }
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen w-full flex flex-col bg-background">
        <header className="sticky top-0 z-50 flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-md">
          {/* Left side - Dropdowns */}
          <div className="flex items-center gap-3">
            {/* Language Select */}
            <LanguageSelect value={language} onChange={setLanguage} />

            {/* Theme Select */}
            <Select
              value={theme.id}
              onValueChange={(value) => {
                const t = themes.find((th) => th.id === value);
                if (t) setTheme(t);
              }}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {themes.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full border border-white/20"
                        style={{ backgroundColor: t.background }}
                      />
                      {t.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Window Style Select */}
            <Select
              value={windowStyle}
              onValueChange={(value) => setWindowStyle(value as WindowStyle)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                {windowStyles.map((style) => (
                  <SelectItem key={style.id} value={style.id}>
                    {style.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Right side - Export buttons */}
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handleCopyToClipboard}
                  disabled={isExporting}
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{copied ? "Copied!" : "Copy to clipboard"}</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={handleExport} disabled={isExporting}>
                  <Download className="size-4" />
                  Export PNG
                </Button>
              </TooltipTrigger>
              <TooltipContent>Download as PNG image</TooltipContent>
            </Tooltip>
          </div>
        </header>

        {/* Main content - Centered snippet */}
        <main className="flex-1 flex items-start justify-center p-8 py-20">
          <div className="w-full max-w-3xl">
            <SnippetCard
              ref={snippetRef}
              windowStyle={windowStyle}
              background={theme.background}
            >
              <CodeEditor
                code={code}
                onChange={setCode}
                onPaste={handlePaste}
                language={language.id}
                theme={theme.id}
                isExporting={isExporting}
                className="min-h-[100px]"
              />
            </SnippetCard>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
