import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type WindowStyle = "macos" | "minimal";

interface SnippetCardProps {
    children: React.ReactNode;
    windowStyle: WindowStyle;
    background: string;
    className?: string;
    padding?: number;
}

export const SnippetCard = forwardRef<HTMLDivElement, SnippetCardProps>(
    ({ children, windowStyle, background, className, padding = 32 }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl overflow-hidden",
                    "shadow-2xl transition-all duration-300 ease-in-out",
                    className,
                )}
                style={{
                    backgroundColor: background,
                    boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 40px 80px rgba(0, 0, 0, 0.2)
          `,
                }}
            >
                {windowStyle === "macos" && <MacOSTitleBar />}
                <div
                    className="relative block"
                    style={{
                        padding: `${padding}px`,
                        paddingTop:
                            windowStyle === "macos"
                                ? `${padding}px`
                                : `${padding}px`,
                    }}
                >
                    {children}
                </div>
            </div>
        );
    },
);

SnippetCard.displayName = "SnippetCard";

function MacOSTitleBar() {
    return (
        <div className="flex items-center gap-2 px-4 py-3 bg-black/20 select-none">
            <div className="flex items-center gap-[6px]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
        </div>
    );
}
