# Leyao (Lia) Tan — Academic Website

Personal academic website for Leyao (Lia) Tan, Ph.D. student in Quantitative
Marketing at the UBC Sauder School of Business.

## Local development

```bash
npm install
npm start
```

Run the checks before publishing:

```bash
npm test -- --runInBand --watchAll=false
npm run lint
npm run build
```

The site is built with React and React Router and published at
[leyaoliatan.github.io](https://leyaoliatan.github.io/). The `public/404.html`
fallback preserves direct links to client-side routes on GitHub Pages.

## Acknowledgements

The project retains its original MIT license and began from Michael D'Angelo's
React personal-site template, with visual foundations originally inspired by
HTML5 UP's Future Imperfect. The current information architecture, content,
theme, typography, page layouts, and responsive styles are customized for this
website.
