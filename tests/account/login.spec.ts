import { expect, test } from "@playwright/test";
import HomePage from "../../src/pages/HomePage";
import LoginPage from "../../src/pages/LoginPage";



test("Verify Successful Login", async ({ page }) => {
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    await page.goto("https://automationteststore.com/");
    await homepage.clickLoginOrRegisterButton();
    await loginpage.enterLogInName("NiallTest");
    await loginpage.enterPassword('Password');
    await loginpage.clickLoginButton();
    await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/account');
});

test("Verify incorrect Login error message", async ({ page }) => {
    const homepage = new HomePage(page);
    const loginpage = new LoginPage(page);
    await page.goto("https://automationteststore.com/");
    await homepage.clickLoginOrRegisterButton();
    await loginpage.login("NiallTest", 'Password');
    await expect(page).toHaveURL('https://automationteststore.com/index.php?rt=account/account');
});

