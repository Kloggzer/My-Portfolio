# Portfolio — Marius Kaufmann

Minimal TypeScript portfolio site, optimized for Vercel deployment.

## Build & Deploy

```sh
npm install
npm run build
```

Deploy to Vercel: connect your repository and deploy automatically.

## Structure

```
src/                — Everything lives here, served directly by Vercel
├── index.html      — Portfolio page  
├── de/index.html   — German version
├── style.css       — Styles
├── main.ts         — Navigation toggle (TypeScript)
├── main.js         — Compiled JavaScript (generated)
├── favicon.ico     — Icon
└── assets/         — Images and documents (copied from root)

tsconfig.json       — TypeScript → JavaScript in src/
package.json        — Build script: compile TS + copy assets
vercel.json         — Points Vercel to src/ directory
```

Ultra minimal. Vercel serves `src/` directly.
