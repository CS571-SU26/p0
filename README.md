# P0 — Jordan Ellis Portfolio

A client-side portfolio website built with React and Vite, hosted on GitHub Pages at
**https://cs571-su26.github.io/p0**.

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | — | Redirects to `/about` |
| `/#/about` | `AboutMe` | Bio, stats, and skills |
| `/#/work` | `MyWork` | Project card grid |

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19 | UI library |
| `react-dom` | ^19 | DOM renderer |
| `react-router-dom` | ^7 | Client-side routing (`HashRouter`) |
| `react-bootstrap` | ^2 | Bootstrap component library for React |
| `bootstrap` | ^5 | Bootstrap CSS (imported in `main.jsx`) |
| `vite` | ^8 | Build tool and dev server |
| `@vitejs/plugin-react` | ^6 | Vite plugin for React/JSX |

## Project Structure

```
src/
  components/
    NavBar.jsx        # Sticky top navigation bar
  pages/
    AboutMe.jsx       # About Me page
    MyWork.jsx        # My Work page (project cards)
  App.jsx             # Route definitions
  main.jsx            # App entry point; Bootstrap CSS import
```

## Getting Started

```bash
npm install
npm run dev
```

## Building for GitHub Pages

```bash
npm run build
```

The `build` output goes to `docs/`. All asset paths are relative to `/p0` (set via `base` in `vite.config.js`).

## Deployment Notes

This site is **fully client-sided** and deployed as static files on GitHub Pages. Because GitHub Pages cannot redirect 404s to `index.html`, routing uses `HashRouter` instead of `BrowserRouter`. Do not switch to `BrowserRouter` without adding a custom `404.html` redirect.
