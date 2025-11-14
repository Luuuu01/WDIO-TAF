# WebdriverIO Page Object Demo

This repo is a small Page Object Model (POM) test automation framework built with [WebdriverIO](https://webdriver.io/) + Mocha. It drives the Syncfusion Appointment Planner demo to showcase how to structure page objects, reusable components, and end-to-end tests.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

## Setup

```bash
npm install
```

## Available scripts

| Script           | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `npm test`       | Runs the WebdriverIO suite defined in `src/tests`.   |
| `npm run lint`   | Lints all source files with ESLint + Prettier rules. |
| `npm run format` | Formats the codebase with Prettier.                  |

## Project structure

```
src/
  config/            # WDIO configuration (entry point for tests)
  helpers/           # Reserved for shared utility functions
  po/
    components/      # Reusable UI widgets (header, side menu, doctor cards...)
    pages/           # Page objects built from components (Dashboard, Doctors)
  tests/             # Mocha specs using the page objects
```

### Page objects & components

- `BasePage` handles navigation and wires shared components (header, side menu).
- `BaseComponent` abstracts locating a root element and exposes helper getters.
- Components (e.g., `AddDoctorComponent`, `SpecialistCardComponent`) live under `src/po/components` and focus on specific widgets.
- Page objects (`src/po/pages`) compose these components to represent full screens such as Dashboard or Doctors.

This layout keeps selectors centralized, encourages reuse, and makes tests read like high-level user flows.

## Writing & running tests

1. Add or update components/pages under `src/po`.
2. Create new spec files in `src/tests` and import the relevant page objects.
3. Run `npm test` to execute the suite locally.

## Linting & formatting

- `npm run lint` catches common bugs (unused vars, missing awaits, etc.) and enforces consistent style.
- `npm run format` reformats files using the shared Prettier config.
