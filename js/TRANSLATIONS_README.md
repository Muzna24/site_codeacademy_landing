# How to Add & Use Translations

Translations are stored in **`translations.js`** and are used by the site when you switch between English and Arabic.

## Add a new word or phrase

1. Open **`js/translations.js`**.
2. Add the same **key** in both `en` and `ar`:

```javascript
// In the "en" section:
myNewLabel: 'Your text in English',

// In the "ar" section:
myNewLabel: 'النص بالعربية',
```

3. In **`index.html`**, add the key to the element that should change with language:

```html
<span data-i18n="myNewLabel">Your text in English</span>
```

4. Save. When the user switches language (EN / العربية), the text will update automatically.

## Rules

- **Key names**: Use camelCase (e.g. `contactTitle`, `faqQ1`). Keep the same key in both `en` and `ar`.
- **Where to put keys**: Group keys by section in `translations.js` (see the comments like `// ----- About -----`).
- **Order**: Load `translations.js` before `script.js` in `index.html` (this is already set up).

## File used by the project

| File              | Role |
|-------------------|------|
| `js/translations.js` | Holds all EN/AR strings. Edit this to add or change text. |
| `script.js`       | Reads `TRANSLATIONS` and applies the correct language to every `[data-i18n="key"]` element. |
| `index.html`      | Uses `data-i18n="key"` on elements that should be translated. |

No build step is required; just edit `translations.js` and refresh the page.
