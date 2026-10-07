# copilot-instructions

write automated tests in playwright following these guidelines:

- Follow playwright best practices
- Do not add comments to each line of code
- write only the playwright test steps for the scenario
- Read and analyze the provided DOM context from the browser
- create one test at a time unless asked for multiple tests
- prioritize `getbyRole()` and `getByText()` selectors over `locator()` when possible
- keep test code clean and focused on the scenario
- don't add assertions unless asked
- For the random test data, keep it short and compact. Don't write long texts.
