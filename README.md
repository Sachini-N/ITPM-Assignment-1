# ITPM Assignment 1 - Swift Translator E2E Tests

## Project Overview

This project contains a comprehensive end-to-end (E2E) testing suite for the **Swift Translator** web application using **Playwright**. The test suite validates the real-time text translation functionality, converting English transliteration to Sinhala script.

**Project Name:** `it23847330-assignment-1`  
**Version:** 1.0.0  
**Framework:** Playwright Test (v1.58.0)

---

## Project Description

The Swift Translator is a web-based translation tool that translates English phonetic text into Sinhala script in real-time. This test suite ensures the translator's accuracy and functionality across multiple test cases.

### Application Under Test (AUT)
- **URL:** https://www.swifttranslator.com/
- **Functionality:** Real-time English to Sinhala transliteration

---

## Features Tested

The test suite includes **35+ test cases** (Pos_UI_0001 to Pos_UI_0035) covering:

✅ **Basic Translations** - Simple English phonetic phrases to Sinhala script  
✅ **Complex Sentences** - Multi-word sentences and compound statements  
✅ **Special Characters** - Numbers, dates, and mixed alphanumeric input  
✅ **Case Sensitivity** - Handling of uppercase and lowercase variations  
✅ **Long Text** - Extended paragraphs and warning messages  
✅ **Real-time Updates** - Immediate translation output validation  
✅ **Multi-line Input** - Text with newline characters  

### Sample Test Cases

| Test ID | Input | Expected Output |
|---------|-------|-----------------|
| Pos_UI_0001 | mama midhulee innee. | මම මිදුලේ ඉන්නේ. |
| Pos_UI_0018 | 2026-01-21 mama Kandy yanavaa. | 2026-01-21 මම Kandy යනවා. |
| Pos_UI_0033 | mama office giyaa namuth vaeda... | මම office ගියා නමුත් වැඩ කරන්න... |
| Pos_UI_0035 | Api Haemadhama mee vageema... | අපි හැමදම මේ වගේම එකට ඉමු... |

---

## Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (Node Package Manager)

### Installation Steps

1. **Clone or download the project:**
   ```bash
   cd d:\y3s1\ITPM-Assignment-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install:
   - `@playwright/test` (v1.58.0) - Test framework
   - `@types/node` (v25.1.0) - TypeScript type definitions for Node.js

---

## Project Structure

```
ITPM-Assignment-1/
├── package.json                 # Project metadata and dependencies
├── playwright.config.js         # Playwright configuration
├── tests/
│   └── example.spec.js          # Main test file with 35+ test cases
├── playwright-report/           # HTML test reports
│   ├── index.html
│   └── data/                    # Report data files
├── test-results/                # Detailed test results
│   └── example-Pos-UI-XXXX*/    # Individual test result directories
└── README.md                    # This file
```

---

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in Specific File
```bash
npx playwright test tests/example.spec.js
```

### Run Tests with UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Tests with Headed Mode (Browser Visible)
```bash
npx playwright test --headed
```

### Run Single Test Case
```bash
npx playwright test -g "Pos_UI_0001"
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

### Generate HTML Report
```bash
npx playwright show-report
```

---

## Configuration Details

### Playwright Configuration (`playwright.config.js`)

- **Test Directory:** `./tests`
- **Parallel Execution:** Enabled for faster test runs
- **Retries:** 0 retries locally, 2 retries in CI/CD environments
- **Workers:** Multiple workers locally, single worker in CI
- **Reporter:** HTML (generates visual reports)
- **Trace Collection:** Captured on first retry for debugging

### Supported Browsers

- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)
- **WebKit** (Desktop Safari)

Tests are configured to run against all three browsers by default.

---

## Test Methodology

### Test Structure

Each test follows a consistent pattern:

1. **Navigation** - Open the Swift Translator website
2. **Input** - Locate textarea and type English transliteration
3. **Verification** - Assert that the Sinhala translation appears
4. **Timeout** - 10-15 second wait for real-time translation rendering

### Example Test Code

```javascript
test('Pos_UI_0001 - Real-time output update', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.type('mama midhulee innee.', { delay: 100 });
  await expect(page.getByText('මම මිදුලේ ඉන්නේ.')).toBeVisible({ timeout: 10000 });
});
```

### Key Testing Features

- **Slow Typing Simulation:** `{ delay: 100 }` to simulate realistic user input
- **Text-based Element Selection:** Uses `getByText()` for reliability
- **Explicit Waits:** 10,000-15,000ms timeout for translation rendering
- **Real Browser Testing:** Tests in actual browsers (Chrome, Firefox, Safari)

---

## Test Results & Reports

### Generated Artifacts

1. **HTML Report** (`playwright-report/index.html`)
   - Visual summary of all test executions
   - Pass/fail status for each test
   - Execution time and duration

2. **Test Results** (`test-results/`)
   - Individual error context for failed tests
   - Detailed failure information
   - Screenshots/videos (if enabled)

### Viewing Reports

```bash
npx playwright show-report
```

---

## Test Execution Statistics

- **Total Test Cases:** 35+
- **Test Naming Convention:** `Pos_UI_XXXX` (Positive UI tests, numbered 0001-0035)
- **Scope:** Real-time output updates for English to Sinhala translation
- **Input Types:** Simple phrases, complex sentences, special characters, multi-line text

---

## Common Issues & Troubleshooting

### Issue: Tests Timeout

**Cause:** Slow network or website unavailability  
**Solution:** Increase timeout in test configuration or check internet connection

```javascript
await expect(...).toBeVisible({ timeout: 15000 });
```

### Issue: "Cannot find element" Error

**Cause:** Website structure changed  
**Solution:** Update selectors in test file
- Use browser DevTools Inspector
- Test with `page.getByText()` if text-based selection fails

### Issue: Tests Pass Locally but Fail in CI

**Cause:** Browser differences or network issues  
**Solution:** 
- Run against all browsers: `npx playwright test`
- Check CI/CD logs for specific errors
- Increase retry count in CI configuration

### Issue: Playwright Not Installed

**Solution:**
```bash
npm install @playwright/test
npx playwright install
```

---

## Dependencies

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@playwright/test` | ^1.58.0 | E2E testing framework and runners |
| `@types/node` | ^25.1.0 | TypeScript type definitions |

### Installation Command

```bash
npm install --save-dev @playwright/test@^1.58.0 @types/node@^25.1.0
```

---

## Best Practices

✅ **Parallel Testing** - Tests run in parallel for faster feedback  
✅ **Page Object Model** - Each test is independent and self-contained  
✅ **Realistic Delays** - Typing with delays simulates user behavior  
✅ **Explicit Waits** - Uses timeouts instead of hard sleeps  
✅ **Cross-browser Testing** - Validates functionality across Chrome, Firefox, Safari  
✅ **Test Organization** - Clear naming convention for easy identification  

---

## CI/CD Integration

To integrate with CI/CD pipelines:

1. **GitHub Actions Example:**
```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install
      - run: npx playwright test
```

2. **Environment Variables:**
```bash
CI=true npx playwright test
```

---

## Contributing

When adding new test cases:

1. Follow the naming convention: `Pos_UI_XXXX`
2. Use consistent structure:
   - Navigate to URL
   - Input English transliteration
   - Assert Sinhala translation appears
3. Add meaningful comments
4. Test with all browsers: `npx playwright test --headed`

---

## Resources & Documentation

- **Playwright Docs:** https://playwright.dev/
- **Test Configuration:** https://playwright.dev/docs/test-configuration
- **Test Reporters:** https://playwright.dev/docs/test-reporters
- **Debugging:** https://playwright.dev/docs/debug

---

## Project Information

- **Author:** IT23847330
- **License:** ISC
- **Created:** 2026
- **Status:** Active Testing

---

## Summary

This test suite provides comprehensive validation of the Swift Translator application's real-time translation capabilities. With 35+ test cases covering various input types and scenarios, the suite ensures reliable English-to-Sinhala transliteration across multiple browsers and platforms.

For questions or contributions, refer to the Playwright documentation and ensure all tests pass before deployment.

---

**Last Updated:** January 31, 2026
