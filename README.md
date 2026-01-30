# IT23847330 Assignment 1 - Swift Translator UI Testing

A comprehensive Playwright-based automated testing suite for the **Swift Translator** web application. This project contains end-to-end tests that validate the real-time English to Sinhala translation functionality.

## Project Overview

This assignment focuses on testing the user interface and functionality of the Swift Translator application (https://www.swifttranslator.com/), which provides real-time translation from English to Sinhala language.

## Features

- **Real-time Translation Testing**: Validates that English text translates to Sinhala in real-time
- **Multiple Test Cases**: Includes 34+ test scenarios covering various phrases and sentences
- **Cross-browser Testing**: Tests run on Chromium, Firefox, and WebKit browsers
- **HTML Reporting**: Generates detailed test reports with screenshots and traces
- **Parallel Execution**: Tests run in parallel for faster execution

## Tech Stack

- **Playwright**: ^1.58.0 - Modern browser automation framework
- **Node.js**: JavaScript runtime environment
- **TypeScript**: Type definitions for Node.js (@types/node ^25.1.0)

## Project Structure

```
IT23847330-Assignment-1/
├── tests/
│   └── example.spec.js          # Main test file with all test cases
├── playwright-report/           # Generated HTML test reports
├── test-results/                # Detailed test result artifacts
├── playwright.config.js         # Playwright configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## Installation

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Setup Steps

1. Clone or navigate to the project directory:
   ```bash
   cd IT23847330-Assignment-1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   This will install:
   - `@playwright/test` - The Playwright testing framework
   - `@types/node` - TypeScript definitions for Node.js

## Running Tests

### Run All Tests
```bash
npm test
```
or
```bash
npx playwright test
```

### Run Tests in a Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a Specific Test File
```bash
npx playwright test tests/example.spec.js
```

### Run Tests in UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

## Test Coverage

The test suite covers the following translation scenarios:

- Basic sentences and phrases
- Questions in English
- Complex sentences with multiple words
- Validation of correct Sinhala output
- Real-time translation response

**Total Test Cases**: 34+ automated test scenarios

## Test Structure

Each test follows this pattern:

1. Navigate to https://www.swifttranslator.com/
2. Locate the input textarea
3. Type English text with a 100ms delay between characters
4. Wait for and validate the Sinhala translation appears
5. Assert the correct translated output is visible

### Example Test

```javascript
test('Pos_UI_0001 - Real-time output update', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mama midhulee innee.', { delay: 100 });
  await expect(page.getByText('මම මිදුලේ ඉන්නේ.')).toBeVisible({ timeout: 10000 });
});
```

## Configuration

The `playwright.config.js` file contains:

- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled by default
- **Browsers**: Chromium, Firefox, WebKit
- **Reporter**: HTML reporter for visual test results
- **Trace Collection**: Enabled on first retry for debugging failed tests
- **Retries**: 2 retries on CI, 0 on local
- **Timeout**: 10-second default wait for assertions

## Test Reports

After running tests, an HTML report is generated in the `playwright-report/` directory.

### View the Report
```bash
npx playwright show-report
```

This opens an interactive HTML dashboard showing:
- Test pass/fail status
- Execution timeline
- Screenshots and videos
- Detailed error messages
- Browser-specific results

## Troubleshooting

### Tests Timing Out
- Increase timeout in test: `await expect(...).toBeVisible({ timeout: 15000 })`
- Check internet connection to swifttranslator.com
- Ensure the website is responsive

### Browser Installation Issues
```bash
npx playwright install
```

### Clear Cache and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
npx playwright install
```

## CI/CD Configuration

The project is configured for CI/CD with:
- Automatic retries (2 times on CI)
- Single worker on CI for consistency
- HTML reports generated automatically
- Forbids `test.only` in source code

## License

ISC

## Author

IT23847330

## Support

For issues or questions about the tests, check:
- Playwright documentation: https://playwright.dev
- Swift Translator: https://www.swifttranslator.com/
- Test report details in `playwright-report/` directory
