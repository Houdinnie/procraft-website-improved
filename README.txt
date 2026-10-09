ProCraft Solutions website
==========================

site/      Ready-to-upload website. Open site/index.html by double-click to preview it.
source/    Editable source (React). Photos are in source/src/photos, logo in source/src/assets.
logos/     Logo file (transparent PNG).

UPLOAD TO A HOST
1. Open your host's file manager or FTP (cPanel, Afrihost, Hetzner, Netlify, Cloudflare Pages, GitHub Pages, etc).
2. Upload everything INSIDE the site/ folder (index.html, app.js, app.css and the images) into the public folder (usually public_html or www).
   Keep the files together in the same folder. index.html must be at the top of that folder.
3. Visit your domain. For Netlify or Cloudflare Pages you can drag the site/ folder onto their upload page.

THINGS TO KNOW
- The quote form has no server. "Send on WhatsApp" opens WhatsApp with the message filled in (to 067 816 8344). "Send by email" opens the visitor's email app addressed to Charlesmurangariri84@gmail.com.
- The photos are stock photos from Pexels (free for commercial use) and are examples only. Replace them with your own work: swap the files in source/src/photos (same names), then rebuild (below).
- Photo sources: Pexels photo IDs 38869861, 8312262, 3915040, 6782480, 19953097, 12173186, 11369598. License: https://www.pexels.com/license/

CHANGING THE SITE
Needs Node.js. In the source/ folder run:  npm install  then  npm run build
The new site is created in source/dist/. Upload that instead of site/.
Text, phone numbers and services are in source/src/App.tsx. Colours and layout are in source/src/style.css.
