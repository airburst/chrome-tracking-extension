# Find all tracking events in Chopin - Chrome Plugin

This plug-in can be used in any Chopin environment and displays a list of tracking events on the page.

## Install

Manual install only. See [this page](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/) for steps.

## Updating version on Chrome store

If you have changes that you have tested locally and want to include in a new update to the extension, follow these instructions:

1. Update the version in the `[manifest.json](./manifest.json) file depending on how big the update is. Increase the right most number for bug fixes, and the middle number for new features. If you add new features, the right most number goes back to 0.
2. Create a new release for the new version once the above changes are merged. This is the link to do so: [https://github.com/simplybusiness/chrome-plugin-autofill/releases/new](https://github.com/simplybusiness/chrome-plugin-autofill/releases/new)
3. In the tag version field, enter the same version number you used in step 1. E.g. v0.15.3
4. For release title use the format `vX.X.X - What the main feature or fix is`
5. In the description, use the format: `This release introduces the following things OR This release fixes the following things` and then a bullet point list of the changes.
6. Click the `This is a pre-release` box
7. Press the Publish release button
8. At this point, the new release will be built and sent to the Chrome store.
9. You can follow the progress of the build at this link [https://github.com/simplybusiness/chrome-plugin-autofill/actions](https://github.com/simplybusiness/chrome-plugin-autofill/actions)
10. Once complete, the version number should show on the [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole/e4e1c564-d64a-443d-b69c-67c84cf97282).
