import { build } from 'esbuild';
import { rmSync, mkdirSync, writeFileSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
await build({
  entryPoints: ['src/main.tsx'], bundle: true, minify: true, format: 'iife',
  outfile: 'dist/app.js', assetNames: '[name]-[hash]', publicPath: '.',
  loader: { '.jpg': 'file', '.png': 'file' }, define: { 'process.env.NODE_ENV': '"production"' },
});
writeFileSync('dist/index.html', `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>ProCraft Solutions | Upholstery &amp; Home Finishes in Kempton Park</title>
<meta name="description" content="Cushions, blinds, curtains, shading, motor trimming and furniture repairs in Kempton Park, Johannesburg. Request a quote from ProCraft Solutions.">
<meta name="theme-color" content="#f7f5ef"><meta property="og:type" content="website">
<meta property="og:title" content="ProCraft Solutions | Kempton Park">
<meta property="og:description" content="Thoughtful craft for home, vehicle and everyday living. Contact ProCraft Solutions in Kempton Park for a quote.">
<link rel="stylesheet" href="app.css"><style>html,body{margin:0}</style></head>
<body><div id="root"></div><script src="app.js"></script></body></html>`);
