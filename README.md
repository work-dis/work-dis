# AI Infrastructure / DevOps — portfolio

A responsive static portfolio, focused on the engineering experience most relevant to an AI-native infrastructure role. Includes only three selected projects:

- **Beerloga** — business storefront, [live demo](https://client-beer.vercel.app/)
- **WorKingEU** — Telegram Mini App / recruitment workflows, project development
- **VPN simple-dimple** — VPN infrastructure architecture, Xray/VLESS

## Before publishing

1. Edit `config.js`: set `displayName`, `github`, `telegram`, `email`. Empty links are not shown. **Never put secrets in this file.**
2. Verify the exact current implementation and status of each project; descriptions are intentionally conservative and architecture views are labeled as concepts.
3. Edit the technology chips in `index.html` if a listed technology has not been used in the specified project. Add verified repository URLs if public.
4. Open `index.html` locally in a browser to preview.

## Publish for free on GitHub Pages

1. Create a **public** repository named `YOUR_USERNAME.github.io` (replace with your GitHub login).
2. Upload *all* files from this folder (including `.nojekyll`, `index.html`, `styles.css`, `app.js`, `config.js`, `assets/`) to the repository root.
3. Go to **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root) → Save**.
4. Open `https://YOUR_USERNAME.github.io/` after the Pages deployment succeeds.

Alternative: publish this folder in any public repository as a project site; the link will be `https://YOUR_USERNAME.github.io/REPO_NAME/`.

No Node dependencies, build step or secrets required. Language toggle RU / EN is client-side. Project cards use real mobile captures from the local clones of `https://github.com/work-dis/client-beer`, `https://github.com/work-dis/hr-pro-bot`, and `https://github.com/work-dis/simple-dimple`. Beerloga uses the home screen after the age gate; simple-dimple is labeled as a dev capture because its backend was not running during capture.
