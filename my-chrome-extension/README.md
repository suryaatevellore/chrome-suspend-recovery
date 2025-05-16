# My Chrome Extension

This is a simple Chrome extension that iterates through the currently open tabs, transforms the current URL into a new one, and reloads the page with the new URL.

## Features

- Iterates through all open tabs.
- Transforms the current URL based on predefined rules.
- Reloads the page with the new URL.

## Installation

1. Clone the repository or download the source code.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the `my-chrome-extension` directory.

## Usage

Once the extension is installed, it will automatically start iterating through the open tabs. You can modify the URL transformation logic in `src/utils.js` to suit your needs.

## Files

- `src/background.js`: Background script that manages the extension's lifecycle.
- `src/content.js`: Content script that interacts with web pages.
- `src/utils.js`: Utility functions for URL transformation.
- `manifest.json`: Configuration file for the Chrome extension.

## License

This project is licensed under the MIT License.