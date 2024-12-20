# Website Headers

This project generates a JavaScript file to be uploaded to our CDN. This file automatically generates metadata, favicons, styles, and scripts for all of our production pages.

To work on the file locally, you can serve the `index.html` file using your preferred application. Make changes to the `src/index.ts` file and run `pnpm build`, and the HTML will source the resulting JavaScript automatically.

When building the file, it is important to use `pnpm build` so that the minification step is run. Running `tsc` directly will bypass this step - while this is perfectly acceptable for debugging locally, the file MUST be minified before uploading to our CDN.

## Live Version

This page is currently deployed. [View the live website.]

## Feedback and Bugs

If you have feedback or a bug report, please feel free to open a GitHub issue!

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This software is licensed under our [global software license](https://docs.nhcarrigan.com/#/license).

Copyright held by Naomi Carrigan.

## Contact

We may be contacted through our [Chat Server](http://chat.nhcarrigan.com) or via email at `contact@nhcarrigan.com`.
