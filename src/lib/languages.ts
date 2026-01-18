import type { BundledLanguage } from "shiki";

export interface LanguageConfig {
  id: BundledLanguage;
  name: string;
  extensions?: string[];
  patterns?: RegExp[];
}

export const languages: LanguageConfig[] = [
  { 
    id: "typescript", 
    name: "TypeScript",
    extensions: [".ts"],
    patterns: [
      /:\s*(string|number|boolean|any|void|never|unknown)\b/,
      /interface\s+\w+/,
      /type\s+\w+\s*=/,
      /<\w+>/,
    ]
  },
  { 
    id: "javascript", 
    name: "JavaScript",
    extensions: [".js"],
    patterns: [
      /\bconst\s+\w+\s*=/,
      /\blet\s+\w+\s*=/,
      /\bfunction\s+\w+\s*\(/,
      /=>\s*{/,
      /console\.\w+\(/,
    ]
  },
  { 
    id: "tsx", 
    name: "TSX",
    extensions: [".tsx"],
    patterns: [
      /<\w+[^>]*\/>/,
      /<\w+[^>]*>.*<\/\w+>/s,
      /:\s*React\./,
      /import.*from\s+['"]react['"]/,
    ]
  },
  { 
    id: "jsx", 
    name: "JSX",
    extensions: [".jsx"],
    patterns: [
      /<\w+[^>]*\/>/,
      /<\w+[^>]*>.*<\/\w+>/s,
    ]
  },
  { 
    id: "python", 
    name: "Python",
    extensions: [".py"],
    patterns: [
      /^def\s+\w+\s*\(/m,
      /^class\s+\w+.*:/m,
      /^import\s+\w+/m,
      /^from\s+\w+\s+import/m,
      /print\s*\(/,
      /:\s*$/m,
      /self\./,
    ]
  },
  { 
    id: "rust", 
    name: "Rust",
    extensions: [".rs"],
    patterns: [
      /fn\s+\w+\s*\(/,
      /let\s+mut\s+/,
      /impl\s+\w+/,
      /pub\s+fn/,
      /->\s*\w+/,
      /&mut\s+/,
      /println!\(/,
    ]
  },
  { 
    id: "go", 
    name: "Go",
    extensions: [".go"],
    patterns: [
      /^package\s+\w+/m,
      /func\s+\w+\s*\(/,
      /fmt\.\w+/,
      /:=\s*/,
      /\[\]\w+{/,
    ]
  },
  { 
    id: "java", 
    name: "Java",
    extensions: [".java"],
    patterns: [
      /public\s+class\s+\w+/,
      /public\s+static\s+void\s+main/,
      /System\.out\./,
      /private\s+\w+\s+\w+;/,
    ]
  },
  { 
    id: "kotlin", 
    name: "Kotlin",
    extensions: [".kt"],
    patterns: [
      /fun\s+\w+\s*\(/,
      /val\s+\w+\s*=/,
      /var\s+\w+\s*=/,
      /println\s*\(/,
    ]
  },
  { 
    id: "swift", 
    name: "Swift",
    extensions: [".swift"],
    patterns: [
      /func\s+\w+\s*\(/,
      /var\s+\w+\s*:/,
      /let\s+\w+\s*:/,
      /guard\s+let/,
      /if\s+let/,
    ]
  },
  { 
    id: "c", 
    name: "C",
    extensions: [".c", ".h"],
    patterns: [
      /#include\s*</,
      /int\s+main\s*\(/,
      /printf\s*\(/,
      /void\s+\w+\s*\(/,
    ]
  },
  { 
    id: "cpp", 
    name: "C++",
    extensions: [".cpp", ".hpp", ".cc"],
    patterns: [
      /#include\s*</,
      /std::/,
      /cout\s*<</,
      /cin\s*>>/,
      /using\s+namespace\s+std/,
    ]
  },
  { 
    id: "csharp", 
    name: "C#",
    extensions: [".cs"],
    patterns: [
      /using\s+System/,
      /namespace\s+\w+/,
      /public\s+class\s+\w+/,
      /Console\.\w+/,
    ]
  },
  { 
    id: "php", 
    name: "PHP",
    extensions: [".php"],
    patterns: [
      /<\?php/,
      /\$\w+\s*=/,
      /echo\s+/,
      /function\s+\w+\s*\(/,
    ]
  },
  { 
    id: "ruby", 
    name: "Ruby",
    extensions: [".rb"],
    patterns: [
      /^def\s+\w+/m,
      /^class\s+\w+/m,
      /puts\s+/,
      /\bdo\s*\|/,
      /\.each\s+do/,
    ]
  },
  { 
    id: "html", 
    name: "HTML",
    extensions: [".html", ".htm"],
    patterns: [
      /<!DOCTYPE\s+html>/i,
      /<html[^>]*>/,
      /<head[^>]*>/,
      /<body[^>]*>/,
      /<div[^>]*>/,
    ]
  },
  { 
    id: "css", 
    name: "CSS",
    extensions: [".css"],
    patterns: [
      /\.[a-zA-Z][\w-]*\s*{/,
      /#[a-zA-Z][\w-]*\s*{/,
      /[a-zA-Z]+\s*:\s*[^;]+;/,
      /@media\s+/,
    ]
  },
  { 
    id: "scss", 
    name: "SCSS",
    extensions: [".scss"],
    patterns: [
      /\$\w+\s*:/,
      /@mixin\s+\w+/,
      /@include\s+\w+/,
      /&:\w+/,
    ]
  },
  { 
    id: "json", 
    name: "JSON",
    extensions: [".json"],
    patterns: [
      /^\s*{[\s\S]*"[^"]+"\s*:/,
      /^\s*\[[\s\S]*\]\s*$/,
    ]
  },
  { 
    id: "yaml", 
    name: "YAML",
    extensions: [".yaml", ".yml"],
    patterns: [
      /^\w+:\s*$/m,
      /^\s+-\s+\w+/m,
      /^\w+:\s+\w+/m,
    ]
  },
  { 
    id: "markdown", 
    name: "Markdown",
    extensions: [".md"],
    patterns: [
      /^#{1,6}\s+/m,
      /^\*\*\w+\*\*/m,
      /^\[.+\]\(.+\)/m,
      /^```\w*/m,
    ]
  },
  { 
    id: "sql", 
    name: "SQL",
    extensions: [".sql"],
    patterns: [
      /SELECT\s+.+\s+FROM/i,
      /INSERT\s+INTO/i,
      /UPDATE\s+\w+\s+SET/i,
      /CREATE\s+TABLE/i,
    ]
  },
  { 
    id: "bash", 
    name: "Bash",
    extensions: [".sh", ".bash"],
    patterns: [
      /^#!/,
      /\becho\s+/,
      /\bif\s+\[\s+/,
      /\bfor\s+\w+\s+in\b/,
      /\$\(\w+\)/,
    ]
  },
  { 
    id: "powershell", 
    name: "PowerShell",
    extensions: [".ps1"],
    patterns: [
      /\$\w+\s*=/,
      /Write-Host/,
      /Get-\w+/,
      /Set-\w+/,
    ]
  },
  { 
    id: "dockerfile", 
    name: "Dockerfile",
    extensions: ["Dockerfile"],
    patterns: [
      /^FROM\s+\w+/m,
      /^RUN\s+/m,
      /^COPY\s+/m,
      /^CMD\s+/m,
    ]
  },
  { 
    id: "graphql", 
    name: "GraphQL",
    extensions: [".graphql", ".gql"],
    patterns: [
      /^(query|mutation|subscription)\s+\w+/m,
      /^type\s+\w+\s*{/m,
    ]
  },
  { 
    id: "vue", 
    name: "Vue",
    extensions: [".vue"],
    patterns: [
      /<template>/,
      /<script\s+setup/,
      /defineProps/,
      /defineEmits/,
    ]
  },
  { 
    id: "svelte", 
    name: "Svelte",
    extensions: [".svelte"],
    patterns: [
      /<script>/,
      /{#if\s+/,
      /{#each\s+/,
      /\$:/,
    ]
  },
  { 
    id: "astro", 
    name: "Astro",
    extensions: [".astro"],
    patterns: [
      /^---$/m,
      /Astro\./,
    ]
  },
  { 
    id: "prisma", 
    name: "Prisma",
    extensions: [".prisma"],
    patterns: [
      /^model\s+\w+\s*{/m,
      /^datasource\s+\w+/m,
      /^generator\s+\w+/m,
    ]
  },
];

export const defaultLanguage = languages[0];

/**
 * Detects the programming language from code content
 */
export function detectLanguage(code: string): LanguageConfig | null {
  if (!code.trim()) return null;

  const scores: Map<string, number> = new Map();

  for (const lang of languages) {
    let score = 0;
    
    if (lang.patterns) {
      for (const pattern of lang.patterns) {
        if (pattern.test(code)) {
          score += 1;
        }
      }
    }

    if (score > 0) {
      scores.set(lang.id, score);
    }
  }

  // Find the language with highest score
  let bestLang: LanguageConfig | null = null;
  let bestScore = 0;

  for (const [langId, score] of scores) {
    if (score > bestScore) {
      bestScore = score;
      bestLang = languages.find(l => l.id === langId) || null;
    }
  }

  return bestLang;
}
