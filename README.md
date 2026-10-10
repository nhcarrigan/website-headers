# Website Headers

This project generates a JavaScript file to be uploaded to our CDN. This file automatically generates metadata, favicons, styles, and scripts for all of our production pages.

To work on the file locally, use `pnpm dev`. This command will compile the TypeScript into JavaScript and simultaneously run the resulting dev server in `src/develop.ts`. This allows you to iterate over changes quickly and watch them update in real time.

When building the file, it is important to use `pnpm build` so that the minification step is run. Running `tsc` directly will bypass this step - while this is perfectly acceptable for debugging locally, the file MUST be minified before uploading to our CDN.

## Design System

The injected stylesheet is the shared visual language for every page. It uses the official palette from [nhcarrigan.com/style](https://nhcarrigan.com/style/), system fonts for text, and Griffy for the wordmark only.

- **Design tokens** (`--witch-*` colours, `--font-*`, `--radius`, `--surface`, `--foreground`, `--link` and more) load on every page. The tokens switch automatically when the page has the `is-dark` class, which the footer's theme toggle controls.
- **Page chrome and element defaults** style `main`, headings, links, buttons, forms, lists, tables, blockquotes and code. `main` is a centred card, and the footer sits at the end of the page rather than being fixed to the viewport.
- Pages should use the tokens (for example `var(--surface)`) rather than hard-coded colours, so dark mode keeps working.

## Opting Out

Bespoke pages, such as the company landing page, can opt out of parts of this library by listing features in a space-separated `data-nhcarrigan-exclude` attribute on the `html` element:

```html
<html lang="en-GB" data-nhcarrigan-exclude="layout footer cta ads">
```

| Feature  | Effect                                                                              |
| -------- | ----------------------------------------------------------------------------------- |
| `layout` | Skips the shared page chrome and element styles. Design tokens still load.          |
| `footer` | Skips the shared footer.                                                            |
| `cta`    | Skips the community popup.                                                          |
| `ads`    | Skips the advertising script.                                                       |

Metadata, icons, consent, analytics and HubSpot always load. Any meta tag or icon a page already declares is left alone, so pages can ship their own for crawlers that do not run scripts.

## Live Version

This page is currently deployed. [View the live website.]

## Feedback and Bugs

If you have feedback or a bug report, please [log a ticket on our forum](https://support.nhcarrigan.com).

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This software is licensed under our [global software license](https://docs.nhcarrigan.com/#/license).

Copyright held by Naomi Carrigan.

## Contact

We may be contacted through our [Chat Server](http://chat.nhcarrigan.com) or via email at `contact@nhcarrigan.com`.
