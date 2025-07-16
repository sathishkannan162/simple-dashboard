# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack for faster compilation
- `npm run build` - Build production version of the application
- `npm run start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check code quality and style

## Project Architecture

This is a Next.js 15 application using the App Router with TypeScript and Tailwind CSS.

### Key Technologies
- **Next.js 15** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling with custom theme configuration
- **shadcn/ui** component library (new-york style, configured for RSC)
- **Lucide React** for icons
- **Geist fonts** (Sans and Mono variants)

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind v4 configuration
- `lib/` - Utility functions and shared code
  - `utils.ts` - Contains `cn()` utility for class name merging
- `public/` - Static assets (SVG icons, images)

### Configuration Files
- `components.json` - shadcn/ui configuration with path aliases
- `tsconfig.json` - TypeScript configuration with `@/*` path mapping
- `next.config.ts` - Next.js configuration (currently minimal)
- `eslint.config.mjs` - ESLint configuration extending Next.js rules

### Styling System
- Uses Tailwind CSS v4 with custom theme variables
- Dark mode support with `.dark` class
- Custom CSS variables for consistent theming
- Uses oklch color space for better color management
- Sidebar-specific color variables for dashboard layouts

### Path Aliases
- `@/components` - Components directory
- `@/lib` - Library/utility functions
- `@/hooks` - Custom React hooks
- `@/ui` - UI components (shadcn/ui)

## Development Notes

The project uses pnpm as the package manager (evidenced by `pnpm-lock.yaml`). When adding new dependencies, use `pnpm add` instead of `npm install`.

The application is configured for dashboard development with sidebar-specific styling variables, suggesting this is intended as a dashboard or admin interface.

Use the `cn()` utility from `@/lib/utils` for conditional class names and Tailwind class merging.