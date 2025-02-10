import { Locator, Page } from "@playwright/test";

export default class HomePage{

    private page:Page;
    private loginOrRegisterButton: Locator;

    constructor(page: Page){
        this.loginOrRegisterButton = page.locator("//a[contains(text(),'Login or register')]");
    }

    async clickLoginOrRegisterButton() {
        await this.loginOrRegisterButton.click();
    }

}



