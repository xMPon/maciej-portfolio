# Portfolio Structure Check Template

Use this checklist before making changes to ensure the page structure stays valid.

## Required checks
- Confirm the portfolio section still contains the main structural blocks:
  - `#portfolio`
  - `#hobbies`
  - `#contact`
- Do not insert duplicated card blocks without closing tags.
- Keep the hobbies list alphabetized by label.
- Keep any new translation keys in all supported languages if the site uses them.
- Ensure every `data-translate` key exists in the translation object for the active languages.

## Hobby ordering rule
Alphabetical order should be maintained for the visible hobby labels, for example:
- AI & Automation
- Boxing
- Cooking
- Data & Finance
- Investing
- Running
- Snowboarding
- Tennis
- Travel
- Trekking

## Safe edit workflow
1. Review the existing HTML block before editing.
2. Add or reorder items in a single contiguous block.
3. Verify the closing tags and card layout remain balanced.
4. Check the translation map for matching keys.
5. Run a quick git diff to confirm the edit is minimal and no duplicate blocks were introduced.

## Example validation command
```bash
git diff -- index.html assets/js/script.js
```
