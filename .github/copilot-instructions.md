# Copilot Instructions

## Project Overview

This is a **client-side only** React application hosted on **GitHub Pages** at `https://cs571-su26.github.io/p0/`. It is a pure React + JavaScript project with no server-side rendering, no Next.js, and no TypeScript.

## Tech Stack

| Library | Version | Purpose |
|---|---|---|
| [Vite](https://vite.dev/) | ^8 | Build tool and dev server |
| [React](https://react.dev/) | ^19 | UI library |
| [React Bootstrap](https://react-bootstrap.netlify.app/) | ^2 | Component library (wraps Bootstrap 5) |
| [Bootstrap](https://getbootstrap.com/) | ^5 | CSS framework (imported globally) |
| [React Router DOM](https://reactrouter.com/) | ^7 | Client-side routing (declarative mode) |

## Project Structure

```
src/
  components/     # Shared/reusable components (e.g. NavBar)
  pages/          # One component per route (Home, About, NotFound)
  App.jsx         # Route definitions only
  main.jsx        # Entry point — HashRouter + Bootstrap CSS
```

## Key Conventions

### Routing — HashRouter (declarative mode)
Routes are defined declaratively in `src/App.jsx` using `<Routes>` and `<Route>`. We use `HashRouter` (not `BrowserRouter`) because GitHub Pages does not support server-side URL rewriting. Hash-based URLs (`/#/about`) work natively without any redirect configuration.

```jsx
// src/main.jsx
import { HashRouter } from 'react-router-dom'
// ...
<HashRouter><App /></HashRouter>

// src/App.jsx
import { Routes, Route } from 'react-router-dom'
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />  // wildcard 404
</Routes>
```

To navigate programmatically use `useNavigate()`; for links use `<Link to="...">` or `<Nav.Link as={Link} to="...">` from React Bootstrap.

### React Bootstrap
Import Bootstrap's CSS **once** globally in `src/main.jsx`:
```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

Import components directly from `react-bootstrap` (tree-shaken automatically by Vite):
```jsx
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap'
```

Do **not** import from `bootstrap/js` — React Bootstrap handles all JS behavior.

### Vite Configuration
`vite.config.js` sets two important options:
- `base: '/p0/'` — ensures all asset URLs are prefixed with the GitHub Pages subpath
- `build.outDir: 'docs'` — outputs the production build to `docs/` for GitHub Pages

## Deployment

This project deploys **manually** via the `docs/` folder:

1. Run `npm run build` — Vite builds to `docs/`
2. Commit and push to `main`
3. GitHub Pages is configured to serve from the `docs/` folder on the `main` branch (Settings → Pages → Source: Deploy from branch → `main` / `/docs`)

## Development

```bash
npm run dev      # start dev server at localhost:5173
npm run build    # build to docs/ for deployment
npm run preview  # preview the production build locally
```
