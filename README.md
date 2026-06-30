# OWO TEA Landing Page

Landing page modern untuk OWO TEA menggunakan teknologi terbaru.

## Tech Stack

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Component library (akan di-setup)

## Struktur Folder

```
owo-icetea/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/            # Next.js App Router pages
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   ├── layout/    # Layout components (Header, Footer)
│   │   └── sections/  # Landing page sections
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility libraries
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Helper functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Development

- Halaman utama: `src/app/page.tsx`
- Layout global: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
# owo-tea
