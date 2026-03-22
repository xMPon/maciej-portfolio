# Claude Instructions

## Purpose
Personal portfolio site for Maciej Poniewierski. Responsive, multilingual static site built with HTML, CSS, Bootstrap 5, and vanilla JavaScript, plus EmailJS and AOS.

## Repo Map
- `index.html` and `error.html` main pages.
- `assets/css/style.css` site styles.
- `assets/js/script.js` UI behavior (language switcher, filters, animations).
- `Achievements/` and `Projects/` content assets and data.
- `assets/img/` for images and SVG placeholders.

## Setup and Run
- This is a static site. Open `index.html` directly or serve with any simple static server.
- Keep external CDN references in sync with existing versions unless requested.

## Agent Workflow
- Keep multilingual content aligned across languages when editing copy.
- If you change section structure in HTML, update any related JS selectors in `assets/js/script.js` and styling in `assets/css/style.css`.
- Avoid introducing build tools unless explicitly requested.

## Coding Standards
- Prefer semantic HTML5.
- Keep styles in `assets/css/style.css` and JS in `assets/js/script.js` instead of inline.
- Maintain Bootstrap class patterns already used.

## Testing and Docs
- No automated tests. After changes, do a quick visual check in a browser and update README if behavior changes.
