  # CreaiRepo — E2E Tests with Playwright

  ## Prerequisites
  -Node Js
  
  Verify you have them:
  node -v
  npm -v

  Installation

  1. Clone the repository:
  git clone https://github.com/edujucler89/CreaiRepo.git
  2. Move into the project folder:
  cd CreaiRepo
  3. Install dependencies:
  npm install
  4. Install the browsers Playwright uses (required step if not playwright browser installed previously):
  npx playwright install

  Running the tests

  The test runs on two configurations: chromium (desktop) and Mobile Safari (iPhone 12).

  - Run everything (both browsers in Parallelo), with a visible window:
  npx playwright test creaiTest --headed
  - Run on desktop only (Chromium):
  npx playwright test creaiTest --project=chromium
  - Run on mobile only (iPhone 12 / Safari):
  npx playwright test creaiTest --project="Mobile Safari"

  Viewing the report

  After the run, an HTML report is generated. To open it:
  npx playwright show-report

  Project structure

  - tests/creaiTest.spec.ts — the test.
  - pages/creaiHomePage.ts — home page Page Object (locators and actions).
  - playwright.config.ts — configuration