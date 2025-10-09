# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project: Capture Checking Project Page

This is a website for showcasing Capture Checking, built with modern web technologies.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Start development server (default: http://localhost:5173)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## Technology Stack & Architecture

### Core Technologies
- **Build Tool**: Vite 7.x with React plugin
- **Framework**: React 19 with TypeScript
- **Styling**: TailwindCSS v4 (using the new @tailwindcss/vite plugin)
- **Package Manager**: pnpm (required - see pnpm-lock.yaml)
- **Type Checking**: TypeScript 5.9 with strict mode enabled

### Project Structure
- `/src/main.tsx` - Application entry point, mounts React to #root
- `/src/App.tsx` - Root component (currently a minimal template)
- `/src/index.css` - Global styles with TailwindCSS imports and theme variables
- `/index.html` - HTML entry point with Vite module script

### Configuration Details

**TailwindCSS v4**: Using the new @tailwindcss/vite plugin approach (no tailwind.config.js needed). Styles are imported via `@import "tailwindcss"` in index.css.

**TypeScript**: Uses project references with separate configs:
- `tsconfig.app.json` - Application code configuration (strict mode, no emit)
- `tsconfig.node.json` - Node/Vite configuration files

**Build Process**:
1. TypeScript compilation check (`tsc -b`)
2. Vite bundling with React and TailwindCSS transformations

## Key Implementation Notes

### Component Development
- Components should be placed in `/src/components/`
- Use TypeScript for all components with proper type definitions
- TailwindCSS classes can be used directly without configuration

### Styling Approach
- TailwindCSS v4 is configured via the Vite plugin
- Global styles are in `/src/index.css` with CSS variables for theming
- Component-specific styles can use CSS modules or inline Tailwind classes

### Type Safety
- Strict TypeScript mode is enabled
- No unused locals/parameters allowed
- All imports must be type-checked

## Development Workflow

When implementing new features:
1. Create components in `/src/components/` directory
2. Use TypeScript interfaces/types for props and state
3. Apply TailwindCSS classes for styling
4. Ensure ESLint passes before committing
5. Test in development with `pnpm dev`
6. Build and preview production build with `pnpm build && pnpm preview`