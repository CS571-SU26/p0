# Copilot Instructions — P0 Portfolio

## Project Overview

This is a **fully client-sided** React portfolio website built with Vite. It is deployed as static files on GitHub Pages at `https://cs571-su26.github.io/p0`. There is no server. Every feature must work without any server-side processing, redirects, or APIs.

## Tech Stack

| Package | Role |
|---|---|
| `react` + `react-dom` | UI rendering |
| `react-router-dom` (`HashRouter`) | Client-side routing |
| `react-bootstrap` | UI component library |
| `bootstrap` | CSS framework (imported globally in `main.jsx`) |
| `vite` + `@vitejs/plugin-react` | Build tool |

## Critical Constraints

### GitHub Pages — Static Hosting Only
- **No server-side rendering.** All logic must run in the browser.
- **Do not use `BrowserRouter`.** GitHub Pages serves static files and cannot fall back to `index.html` for unknown paths. The app uses `HashRouter`, which keeps routing entirely in the URL hash (e.g. `/#/about`). Never replace `HashRouter` with `BrowserRouter`.
- **Do not add any Node.js/server-side code** (e.g. Express, API routes, SSR).
- **Do not fetch from relative API paths** (e.g. `/api/...`). All data must be hardcoded, fetched from an external public API, or loaded from static files bundled with the build.

### Vite Base Path
- `vite.config.js` sets `base: '/p0'`. This ensures all built asset URLs are prefixed with `/p0` to match the GitHub Pages subdirectory.
- Do not remove or change this `base` value.

### Bootstrap CSS
- `bootstrap/dist/css/bootstrap.min.css` is imported in `src/main.jsx`. Do not import it again in individual components.
- Use `react-bootstrap` components (e.g. `<Container>`, `<Row>`, `<Card>`) rather than writing raw Bootstrap HTML where possible.

## File Structure

```
src/
  components/       # Shared/reusable components (e.g. NavBar)
  pages/            # One file per route (AboutMe, MyWork)
  App.jsx           # Route definitions only — no business logic here
  main.jsx          # Entry point: Bootstrap CSS import + HashRouter + App
```

## Routing

Routes are defined in `App.jsx` using `<Routes>` and `<Route>`. The root `/` redirects to `/about`. Add new pages by:
1. Creating a component in `src/pages/`.
2. Adding a `<Route>` in `App.jsx`.
3. Adding a `<Nav.Link as={NavLink} to="...">` entry in `src/components/NavBar.jsx`.

## Adding New Dependencies

Before adding any npm package, confirm it works in a fully static/client-side environment. Packages that require Node.js at runtime are not compatible with this project.
