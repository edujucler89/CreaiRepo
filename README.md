  # Run Test onf you local machine (OPTION A)

  ## Prerequisites
  -Node Js
  -git
  
  ## Installation

  1. Clone the repository:
  git clone https://github.com/edujucler89/CreaiRepo.git
  2. Move into the project folder:
  cd CreaiRepo
  3. Install dependencies:
  npm install
  4. Install the browsers Playwright uses (required step if not playwright browser installed previously):
  npx playwright install

  ## Running the tests

  The test runs on two configurations: chromium (desktop) and Mobile Safari (iPhone 12).

  - Run everything (both browsers in Parallelo), with a visible window:
  npx playwright test creaiTest --headed
  - Run on desktop only (Chromium):
  npx playwright test creaiTest --project=chromium
  - Run on mobile only (iPhone 12 / Safari):
  npx playwright test creaiTest --project="Mobile Safari"

  ## Viewing the report

  After the run, an HTML report is generated. To open it:
  npx playwright show-report

  ## Project structure

  - tests/creaiTest.spec.ts — the test.
  - pages/creaiHomePage.ts — home page Page Object (locators and actions).
  - playwright.config.ts — configuration

  ## View results from GitHub Actions (OPTION B)

  Each workflow run uploads the HTML report (including test videos) as a downloadable artifact. To view it:

  1. Go to the **Actions** tab of the repository.
  2. Click the workflow run you want to inspect.
  3. Scroll down to the **Artifacts** section at the bottom of the run summary.
  4. Download the **`playwright-report`** artifact (a `.zip` file).
  5. Unzip it. You'll get a `playwright-report/` folder.
  6. Open the report:
     ```bash
     npx playwright show-report playwright-report
     (or open playwright-report/index.html directly in your browser).
  7. In the report, click a test to see its details. The video of the run is embedded there; the raw video files also live inside
  playwright-report/data/ as .webm.