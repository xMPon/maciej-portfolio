# Maciej Poniewierski — Personal Portfolio Website

A responsive, multilingual personal portfolio website built with HTML, CSS and JavaScript.

https://xmpon.github.io/maciej-portfolio/

## Overview

This site presents my professional profile as a Financial Modelling Analyst and Data Analytics specialist. It covers my work experience, education, technical skills, certifications and selected projects.

## Features

- **Multilingual** — full content available in English, French, Polish, German and Spanish via a language switcher
- **Responsive** — mobile-first layout built on Bootstrap 5
- **Certificate viewer** — modal pop-up previews for professional certifications
- **Module viewer** — detailed module breakdowns for MSc (University of Bristol), BSc (Oxford Brookes) and CII qualifications
- **Animated** — scroll-triggered animations via AOS
- **Portfolio filter** — project cards filterable by category (FinTech, Data, Web)
- **Contact form** — integrated Web3Forms contact flow with anti-bot throttling and honeypot checks

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, Bootstrap 5.3 |
| Scripts | Vanilla JavaScript (ES6) |
| Animations | AOS 2.3 |
| Icons | Font Awesome 6.5 |
| Contact | Web3Forms |

## Sections

1. **Hero** — introduction, headline stats and CV download
2. **Skills** — technical skills across analytics, cloud, development and delivery
3. **Achievements** — professional certifications (AZ-900, SAFe, SAS, CII)
4. **Education** — MSc Bristol, CII Level 3, BSc Oxford Brookes, City of Bath College
5. **Experience** — six roles from 2017 to present
6. **Portfolio** — selected projects with descriptions and links
7. **Hobbies** — personal interests
8. **Contact** — contact form and social links

## Data Note

- `Projects/Power BI/Data/customers.csv` is a synthetic dataset for portfolio demonstration only.

## Contact Form Security

- Rotate your Web3Forms access key if previously exposed.
- Restrict allowed domains in Web3Forms to your production domains only.
- Enable CAPTCHA/challenge mode in your Web3Forms dashboard.
- Set `web3forms-access-key` in `index.html` to your newly rotated key.

## HTML Validation Notes

- The file `.htmlvalidate.json` must remain strict JSON, so comments like `//` and `/* */` are not allowed.
- JSON intentionally forbids comments to keep config parsing deterministic across tooling.
- Keep configuration rationale in documentation (this README section) or commit messages, not inside JSON config files.
- `hidden-focusable` is intentionally disabled to avoid false positives from Bootstrap modal focus behavior.
- `prefer-native-element` is intentionally disabled because this UI uses framework-driven interactive patterns where strict native-only enforcement is too restrictive.

## Certifications Included

- Microsoft Azure Fundamentals AZ-900
- SAFe Agilist
- SAS Certified Specialist: Base Programming (SAS 9.4)
- CII Level 3 Certificate in Financial Services

## Author

**Maciej Poniewierski**
- LinkedIn: [linkedin.com/in/maciejponiewierski](https://linkedin.com/in/maciejponiewierski)
- GitHub: [github.com/xMPon](https://github.com/xMPon)
