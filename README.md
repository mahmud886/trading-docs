# 📈 Trading Docs

**The Complete Institutional Trading Education Platform**

A full-featured, offline-capable Progressive Web App (PWA) built with Next.js 16, delivering 300+ trading topics across 10 categories in English & Bengali — completely free.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![PWA](https://img.shields.io/badge/PWA-Offline_Ready-00ff9d)](#-progressive-web-app-pwa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 🎯 Overview

**Trading Docs** is a professional-grade trading education platform designed to teach retail traders how institutional players (banks, hedge funds, prop firms) operate in financial markets. It covers everything from absolute beginner fundamentals to expert-level quantitative strategies.

### Key Highlights

- **306 Topics** across 10 major categories
- **2 Languages** — English & Bengali (বাংলা)
- **23 Interactive Tools** — Calculators, analyzers, simulators
- **39 Blog Posts** — Market insights & educational articles
- **Full Offline Mode** — PWA with complete precaching
- **Mobile-First Design** — Responsive across all devices
- **SEO Optimized** — Structured data, sitemaps, Open Graph

---

## 📚 Content Categories

| Category                  | Topics | Description                                         |
| ------------------------- | ------ | --------------------------------------------------- |
| **Price Action**          | 49     | Candlesticks, market structure, entries & exits     |
| **Smart Money Concepts**  | 31     | Order blocks, FVG, liquidity engineering            |
| **ICT Methodology**       | 31     | Kill zones, PD arrays, market maker models          |
| **Academy**               | 100    | Markets, psychology, risk, instruments, indicators  |
| **Forex Sessions**        | 16     | Session timing, overlaps & kill zones (BD timezone) |
| **Order Flow**            | 8      | DOM, volume profile, delta, footprint charts        |
| **Intermarket Analysis**  | 8      | DXY, yield curves, cross-asset correlations         |
| **Quantitative Trading**  | 9      | Expectancy, Kelly criterion, Monte Carlo            |
| **Wyckoff Method**        | 8      | Composite man, accumulation/distribution            |
| **Auction Market Theory** | 7      | Market profile, TPO, value areas                    |

**Total: 306 topics × 2 languages = 612 articles**

---

## 🛠️ Interactive Trading Tools (23)

| Tool                   | Description                           |
| ---------------------- | ------------------------------------- |
| Position Calculator    | Calculate position size based on risk |
| Risk/Reward Calculator | Visualize R:R ratios                  |
| Pip Value Calculator   | Calculate pip values for any pair     |
| Fibonacci Calculator   | Auto-calculate fib levels             |
| Margin Calculator      | Required margin by leverage           |
| Lot Converter          | Convert between lot types             |
| Swap Calculator        | Overnight swap costs                  |
| TP/SL Calculator       | Take profit & stop loss levels        |
| ATR Analyzer           | Average True Range analysis           |
| Drawdown Calculator    | Max drawdown simulation               |
| Compounding Calculator | Compound growth projection            |
| Equity Simulator       | Monte Carlo equity curves             |
| Expectancy Calculator  | System expectancy metrics             |
| Correlation Matrix     | Currency pair correlations            |
| Currency Strength      | Real-time strength meter              |
| Session Timer          | Live forex session clock (BD time)    |
| Economic Calendar      | Upcoming news events                  |
| COT Viewer             | Commitment of Traders data            |
| Journal Template       | Trading journal framework             |
| MTF Analyzer           | Multi-timeframe analysis              |
| Portfolio Allocation   | Asset allocation optimizer            |
| Regime Detector        | Market regime identification          |
| Dashboard              | Unified trading dashboard             |

---

## 📱 Progressive Web App (PWA)

Trading Docs is a **fully offline-capable PWA**:

- ✅ **Install on any device** — home screen shortcut, standalone mode
- ✅ **Full offline access** — all 612 articles cached at build time
- ✅ **Background sync** — content updates when back online
- ✅ **Fast navigation** — 3-second network timeout, instant cache fallback
- ✅ **Optimized caching** — 30-day retention, 512+ page cache limit

### How It Works

1. **First visit** — Service worker installs and precaches all pages
2. **Subsequent visits** — Served from cache (NetworkFirst with 3s timeout)
3. **Offline** — Everything works, served instantly from cache
4. **Online** — Fresh content fetched, cache updated in background

### Technology

- **Service Worker:** [Serwist](https://serwist.pages.dev) (Workbox successor)
- **Strategy:** Precache all routes + NetworkFirst runtime caching
- **Manifest:** Full PWA manifest with themed icons

---

## 🏗️ Tech Stack

| Layer             | Technology                             |
| ----------------- | -------------------------------------- |
| **Framework**     | Next.js 16.2.6 (App Router, Turbopack) |
| **Language**      | TypeScript 5.x                         |
| **Styling**       | Tailwind CSS 4.x                       |
| **Content**       | MDX (Markdown + React components)      |
| **UI Components** | Radix UI primitives                    |
| **Animations**    | Framer Motion                          |
| **Icons**         | Lucide React                           |
| **PWA**           | Serwist 9.x (@serwist/turbopack)       |
| **Search**        | cmdk (command palette)                 |
| **Theming**       | next-themes (dark/light)               |
| **Deployment**    | Vercel                                 |

---

## 📁 Project Structure

```
trading-docs/
├── app/                        # Next.js App Router
│   ├── [lang]/                 # i18n routing (en/bn)
│   │   ├── (docs)/             # Documentation layout (sidebar)
│   │   │   ├── price-action/   # Price Action pages
│   │   │   ├── smc/            # Smart Money Concepts pages
│   │   │   ├── ict/            # ICT Methodology pages
│   │   │   ├── academy/        # Academy pages
│   │   │   ├── forex-sessions/ # Forex Sessions pages
│   │   │   ├── order-flow/     # Order Flow pages
│   │   │   ├── intermarket/    # Intermarket pages
│   │   │   ├── quantitative/   # Quantitative pages
│   │   │   ├── wyckoff/        # Wyckoff pages
│   │   │   └── auction-market/ # Auction Market pages
│   │   ├── (content)/          # Content layout (no sidebar)
│   │   │   ├── blog/           # Blog posts
│   │   │   ├── tools/          # 23 interactive tools
│   │   │   ├── glossary/       # Trading glossary
│   │   │   ├── charts/         # Chart analysis
│   │   │   └── dashboard/      # Trading dashboard
│   │   └── api/                # API routes
│   ├── ~offline/               # Offline fallback page
│   ├── serwist/                # Service worker route
│   ├── sw.ts                   # Service worker source
│   ├── manifest.ts             # PWA manifest
│   ├── icon.tsx                # Dynamic favicon
│   ├── apple-icon.tsx          # Apple touch icon
│   └── layout.tsx              # Root layout + metadata
├── components/
│   ├── layout/                 # Navbar, sidebar, footer
│   ├── docs/                   # Documentation components
│   ├── trading/                # Trading-specific UI
│   ├── blog/                   # Blog components
│   └── brand/                  # Logo & branding
├── content/
│   ├── en/                     # English content (306 MDX files)
│   └── bn/                     # Bengali content (306 MDX files)
├── lib/
│   ├── content.ts              # Content reading & tree building
│   ├── constants.ts            # Categories, config
│   ├── i18n.ts                 # Internationalization
│   ├── schema.ts               # JSON-LD structured data
│   ├── toc.ts                  # Table of contents extraction
│   ├── utils.ts                # Utility functions
│   ├── brand/                  # PWA icon generation
│   └── dictionaries/           # UI translations (en/bn)
├── public/
│   ├── icons/                  # PWA icons (generated)
│   └── images/                 # Static images & OG
├── scripts/                    # Content generation & build scripts
├── hooks/                      # React hooks
└── glossaries/                 # Trading terminology data
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** 9+ or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/mahmud886/trading-docs.git
cd trading-docs

# Install dependencies
npm install

# Generate PWA icons
npm run generate:icons

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command                  | Description                                |
| ------------------------ | ------------------------------------------ |
| `npm run dev`            | Start development server (Turbopack)       |
| `npm run build`          | Format + generate icons + production build |
| `npm run start`          | Start production server                    |
| `npm run lint`           | Run ESLint                                 |
| `npm run format`         | Format all files with Prettier             |
| `npm run format:check`   | Check formatting without writing           |
| `npm run generate:icons` | Regenerate PWA icons from SVG              |

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments.

---

## 🌍 Internationalization (i18n)

The platform supports two languages with full content parity:

- **English** (`/en`) — 306 comprehensive articles
- **Bengali** (`/bn`) — 306 fully translated articles

### Adding a New Language

1. Add locale to `lib/i18n.ts`
2. Create dictionary in `lib/dictionaries/`
3. Create content directory under `content/<locale>/`
4. Add MDX files mirroring the English structure

---

## 📖 Content Management

### Adding a New Topic

1. Create an `.mdx` file in the appropriate category:

   ```
   content/en/<category>/<topic-slug>.mdx
   ```

2. Add frontmatter:

   ```mdx
   ---
   title: "Your Topic Title"
   description: "Brief description for SEO"
   level: "beginner" | "intermediate" | "advanced" | "expert"
   order: 1
   lastUpdated: "2026-06-11"
   ---

   Your content here...
   ```

3. Add to `_meta.json` for sidebar ordering:

   ```json
   {
     "topic-slug": "Display Title"
   }
   ```

4. Create the Bengali version in `content/bn/<category>/`

### Content Levels

| Level          | Target Audience            |
| -------------- | -------------------------- |
| `beginner`     | New to trading             |
| `intermediate` | 6-12 months experience     |
| `advanced`     | 1-3 years experience       |
| `expert`       | Professional/institutional |

---

## 🎓 Learning Paths

### 🟢 Beginner Path

1. What is Trading → Types of Traders
2. Forex Basics → Order Types
3. Risk Management → Position Sizing
4. Price Action Fundamentals → Candlestick Patterns
5. Technical Indicators → Support & Resistance

### 🟡 Intermediate Path

1. Market Structure → Trend Analysis
2. Chart Patterns → Fibonacci Trading
3. Smart Money Concepts Intro → Order Blocks
4. Trading Plan Development → Journal
5. Advanced Money Management

### 🔴 Advanced Path

1. ICT Methodology → Kill Zones → PD Arrays
2. Institutional Order Flow → Volume Profile
3. Elliott Wave → Harmonic Patterns
4. Wyckoff Method → Auction Market Theory
5. Quantitative Analysis → Backtesting

### ⚫ Expert/System Builder Path

1. Intermarket Analysis → Regime Detection
2. Kelly Criterion → Monte Carlo Simulation
3. Order Flow Analysis → Footprint Charts
4. Market Maker Models → Algorithmic Delivery
5. Performance Analytics → Equity Curve Management

---

## ✨ Features

### Core

- ✅ 306 comprehensive trading topics
- ✅ Full bilingual support (EN/BN)
- ✅ 23 interactive trading tools
- ✅ 39 educational blog posts
- ✅ Trading glossary with 500+ terms
- ✅ Command palette search (⌘K)
- ✅ Dark/Light theme

### Technical

- ✅ PWA — full offline support
- ✅ Responsive — mobile, tablet, desktop
- ✅ SEO — structured data, sitemaps, robots.txt
- ✅ Performance — Turbopack, optimized images
- ✅ Accessibility — semantic HTML, ARIA
- ✅ Type-safe — full TypeScript
- ✅ Code quality — ESLint + Prettier

### Navigation

- ✅ Dynamic sidebar with category grouping
- ✅ Breadcrumbs
- ✅ Previous/Next article navigation
- ✅ Table of contents (auto-generated)
- ✅ Reading time estimates
- ✅ Level indicators (beginner → expert)

---

## 🔧 Configuration

### Environment Variables

```env
# Optional
NEXT_PUBLIC_SITE_URL=https://tradingdocs.vercel.app
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
VERCEL_GIT_COMMIT_SHA=auto-set-by-vercel
```

### Customization

- **Colors:** Edit `lib/constants.ts` → `ACCENT_COLORS`
- **Categories:** Edit `lib/constants.ts` → `CATEGORIES`
- **Branding:** Edit `public/icons/logo.svg` + run `npm run generate:icons`
- **Manifest:** Edit `app/manifest.ts`

---

## 📊 Content Standards

Every article follows these quality guidelines:

- ✓ Clear explanations for the target skill level
- ✓ Practical, real-world trading examples
- ✓ Specific rules & criteria (not vague advice)
- ✓ Common mistakes & how to avoid them
- ✓ Step-by-step implementation guides
- ✓ Comparison tables & visual aids
- ✓ Key takeaways & summaries
- ✓ Appropriate risk disclaimers

---

## 🤝 Contributing

Contributions are welcome! Please ensure:

1. **Accuracy** — Trading content must be factually correct
2. **Completeness** — Cover the topic thoroughly
3. **Quality** — Professional writing standard
4. **Risk messaging** — No unrealistic claims or guarantees
5. **Bilingual** — Provide both EN and BN versions (or flag for translation)
6. **Formatting** — Run `npm run format` before committing

### Development Workflow

```bash
# Create feature branch
git checkout -b feature/new-topic

# Make changes
# ...

# Format & lint
npm run format
npm run lint

# Build to verify
npm run build

# Commit & push
git add .
git commit -m "feat: add new topic"
git push origin feature/new-topic
```

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 👤 Author

**Md. Iqbal Mahmud**

- GitHub: [@mahmud886](https://github.com/mahmud886)

---

## 📈 Stats

| Metric            | Value      |
| ----------------- | ---------- |
| Total Topics      | 306        |
| Languages         | 2 (EN, BN) |
| Interactive Tools | 23         |
| Blog Posts        | 39         |
| Categories        | 10         |
| Total Articles    | 612+       |

---

**Platform Status:** ✅ Active & Maintained  
**Last Updated:** June 2026  
**Version:** 3.0 — Full Offline PWA  
**Content Quality:** Professional institutional trading education standard
