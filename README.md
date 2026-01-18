# Snippet - Code Beautifier

**Snippet** is a modern, high-performance tool designed to create beautiful, shareable images of your code. Built with React 19, TypeScript, and the latest Tailwind CSS v4, it features a premium glassmorphism UI and production-ready syntax highlighting.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-cyan)

## ✨ Features

- **Syntax Highlighting**: Powered by [Shiki](https://shiki.style/) for accurate VS Code-like highlighting.
- **Language Auto-Detection**: Automatically detects the programming language when you paste code.
- **Multiple Themes**: Includes popular themes like Dracula, GitHub Dark, Tokyo Night, Nord, and more.
- **Window Styles**: Choose between a macOS-style window with traffic lights or a clean minimal look.
- **Export Options**:
  - Download as high-quality **PNG**.
  - Copy image directly to **Clipboard**.
- **Modern UI/UX**:
  - Built with **React 19** and **Radix UI**.
  - Styled with **Tailwind CSS v4** (using the new Oxide engine).
  - Premium dark mode with glassmorphism effects (`backdrop-blur`).

## 🛠️ Tech Stack

- **Runtime**: [Bun](https://bun.sh)
- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, `tw-animate-css`
- **Components**: Radix UI, Shadcn UI (custom implementation), Lucide React
- **Syntax Highlighting**: Shiki
- **Image Generation**: html-to-image
- **Deployment**: Cloudflare Pages (`wrangler`)

## 🚀 Getting Started

Ensure you have [Bun](https://bun.sh) installed on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/1jmdev/snippet.git
cd snippet
```

### 2. Install dependencies

```bash
bun install
```

### 3. Start the development server

```bash
bun run dev
```

The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```text
├── public/              # Static assets (robots.txt, sitemap, icons)
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # Reusable UI components (buttons, dialogs, etc.)
│   │   ├── CodeEditor.tsx   # The main editor logic using Shiki
│   │   ├── SnippetCard.tsx  # The visual container for the code
│   │   └── ...
│   ├── lib/             # Utilities and configurations
│   │   ├── languages.ts # Language definitions and regex patterns
│   │   ├── themes.ts    # Theme configurations
│   │   └── utils.ts     # CN utility
│   ├── App.tsx          # Main application layout and logic
│   └── index.css        # Global styles and Tailwind v4 config
├── eslint.config.js     # Flat config for ESLint
├── vite.config.ts       # Vite configuration
└── wrangler.jsonc       # Cloudflare deployment config
```

## 🏗️ Building for Production

To create a production build:

```bash
bun run build
```

The output will be generated in the `dist` directory.

### Deploying to Cloudflare Pages

This project includes a `wrangler.jsonc` configuration. You can deploy directly using Wrangler:

```bash
bunx wrangler pages deploy dist
```

## 🎨 Customization

### Adding New Themes
Edit `src/lib/themes.ts`. You need to provide the Shiki BundledTheme ID and a background color.

### Adding Languages
Edit `src/lib/languages.ts`. Add the language ID, display name, and optional Regex patterns for auto-detection.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License.