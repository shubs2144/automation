# Playwright Cucumber TypeScript Framework

This is a simple example project to demonstrate how to integrate Playwright with Cucumber using TypeScript.

## Features
- Example login functionality test
- Integration with Cucumber for BDD-style test writing
- TypeScript support

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the tests**:
   ```bash
   npm test
   ```

3. **View reports** (if configured in `cucumber.js`).

## Folder Structure
```
playwright-cucumber-ts-login/
├── features/
│   ├── login.feature
├── step-definitions/
│   ├── loginSteps.ts
├── playwright.config.ts
├── cucumber.js
├── package.json
├── tsconfig.json
└── README.md
```