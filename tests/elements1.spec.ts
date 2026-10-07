import { test, expect } from "@playwright/test";

test.beforeAll("demoqa", async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.beforeEach("demoqa", async ({ page }) => {
  await page.goto("https://demoqa.com/elements");
});
test("textbox", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  await page.locator("#userName").fill("chetana");
  await page.getByPlaceholder("name@example.com").fill("chetana@example.com");
  await page.getByPlaceholder("Current Address").fill("Borsi,Bhilai");
  await page.locator("#permanentAddress").fill("chhattisgarh");
  await page.getByRole("button", { name: "Submit" }).click();
  // Assert output box is visible
  await expect(page.locator("#output")).toBeVisible();
});

test("checkbox", async ({ page }) => {
  await page.goto("https://demoqa.com/checkbox");
  await page
    .locator('[class="rc-tree-switcher rc-tree-switcher_close"]')
    .click();
  await page.getByRole("checkbox", { name: "Desktop" }).check();
  await page
    .getByRole("checkbox", { name: "Documents" })
    .check({ timeout: 5000 });
  // await page.getByRole('checkbox',{name:'Document'}).uncheck({timeout:5000})

  const allCheckbox = page.getByRole("checkbox");
  for (const box of await allCheckbox.all()) {
    await box.check();
    expect(await box.isChecked()).toBeTruthy();

    await box.uncheck();
    expect(await box.isChecked()).toBeFalsy();
  }
});

test("radio button", async ({ page }) => {
  await page.goto("https://demoqa.com/radio-button");
  //await page.getByLabel('Yes').check()
  await page.getByRole("radio", { name: "Impressive" }).check();
  const radiobtn = await page
    .getByRole("radio", { name: "Impressive" })
    .isChecked();
  expect(radiobtn).toBeTruthy();

  const noButton = await page.getByRole("radio", { name: "No" }).isChecked();
  await expect(noButton).toBeFalsy;

  await expect(page.locator("#noRadio")).toBeDisabled();
});

test("Web tables", async ({ page }) => {
  // 1) get the row by any text in this row and edit the value
  await page.goto("https://demoqa.com/webtables");
  const targetRow = await page.getByRole("row", { name: "alden@example.com" });
  await targetRow.locator("#edit-record-2").click();
  await page.locator("#age-wrapper").getByPlaceholder("Age").clear();
  await page.locator("#age-wrapper").getByPlaceholder("Age").fill("30");
  await page.getByRole("button", { name: "submit" }).click();

  // 2) add a registration and delete it
  await page.locator("#addNewRecordButton").click();
  await page.locator("#firstName").fill("chetana");
  await page.locator("#lastName").fill("saibanna");
  await page
    .locator("#userEmail-wrapper")
    .getByPlaceholder("name@example.com")
    .fill("chetana@gmail.com");
  await page.locator("#age-wrapper").getByPlaceholder("age").fill("35");
  await page
    .locator("#salary-wrapper")
    .getByPlaceholder("salary")
    .fill("40000");
  await page
    .locator("#department-wrapper")
    .getByPlaceholder("Department")
    .fill("IT");
  await page
    .locator('[class = "mt-4 justify-content-end row"]')
    .getByText("submit")
    .click();
  // await page.getByRole('row',{name:'chetana@gmail.com'}).locator('#edit-record-4').click()
});

// 3) test filter(search) of the table(webtables-2)
test("search table", async ({ page }) => {
  await page.goto("https://demoqa.com/webtables");
  const ages = ["29", "39", "45", "50"];
  for (let age of ages) {
    await page.getByPlaceholder("Type to search").fill(age);

    const ageRows = page.locator("tbody tr");
    for (let row of await ageRows.all()) {
      const cellValue = await row.locator("td").nth(2).textContent()
      expect(cellValue).toEqual(age);
    }
  }
});
