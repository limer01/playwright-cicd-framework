import { Locator, Page } from "@playwright/test";

export default class LoginPage{ 

    private page: Page;
    private loginName: Locator;
    private password: Locator;
    private loginButton: Locator; 
    private incorrectLoginError: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginName = page.locator('//*[@id="loginFrm_loginname"]');
        this.password = page.locator('//*[@id="loginFrm_password"]');
        this.loginButton = page.locator('//button[@title="Login"]');
        this.incorrectLoginError = page.locator('//*[@id="maincontainer"]/div/div/div/div[1]');
    }

    async login(username: string, password: string){
        await this.enterLogInName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async enterLogInName(loginName: string ) {
        await this.loginName.fill(loginName);
    } 

    async enterPassword(password: string ) {
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}