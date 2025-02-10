import { Page, Locator } from "@playwright/test";

export default class RegisterPage{ 

    private page: Page;
    private firstname: Locator;
    private lastname: Locator;
    private email: Locator;
    private telephone: Locator;
    private fax: Locator;
    
    private company: Locator;
    private address1: Locator;
    private address2: Locator;
    private city: Locator;
    private region: Locator
    private zip: Locator;
    private counrty: Locator;

    private logInName: Locator;
    private password: Locator;
    private pasdswordConfirm: Locator;

    private subscribe: Locator;
    private privacyPolicy: Locator;

    private continueButton: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.firstname = page.locator('//*[@id="AccountFrm_firstname"]');
        this.lastname = page.locator('//*[@id="AccountFrm_lastname"]');
        this.email = page.locator('//*[@id="AccountFrm_email"]');
        this.telephone = page.locator('//*[@id="AccountFrm_telephone"]');
        this.fax = page.locator('//*[@id="AccountFrm_fax"]');
        this.company = page.locator('//*[@id="AccountFrm_company"]');
        this.address1 = page.locator('//*[@id="AccountFrm_address_1"]');
        this.address2 = page.locator('//*[@id="AccountFrm_address_2"]');
        this.city = page.locator('//*[@id="AccountFrm_city"]');
        this.region = page.locator('//*[@id="AccountFrm_zone_id"]');
        this.zip = page.locator('//*[@id="AccountFrm_postcode"]');
        this.counrty = page.locator('//*[@id="AccountFrm_country_id"]');
        this.logInName = page.locator('//*[@id="AccountFrm_loginname"]');
        this.password = page.locator('//*[@id="AccountFrm_password"]');
        this.pasdswordConfirm = page.locator('//*[@id="AccountFrm_confirm"]');
        this.subscribe = page.locator('//*[@id="AccountFrm_newsletter0"]');
        this.privacyPolicy = page.locator('//*[@id="AccountFrm_agree"]');
        this.continueButton = page.locator('//button[@title="Continue"]');

    }

     
    async enterFirstName(firstname: string ) {
        await this.firstname.fill('Niall');
    }

    async enterLastName(lastname: string ) {
        await this.lastname.fill('kelly');
    }

    async enterEmail(email: string ) {
        await this.email.fill('niallkelly100@test.com')
    }
    
    async enterTelephone(telephone: string ) {
        await this.telephone.fill('1234567890')
    }

    async enterFax(fax: string ) {
        await this.fax.fill('1234567890')
    }   

    async enterCompany(company: string ) {
        await this.company.fill('Test Company')
    }   

    async enterAddress1(address1: string ) {
        await this.address1.fill('Test Address 1')
    }   

    async enterAddress2(address2: string ) {
        await this.address2.fill('Test Address 2')
    }   

    async enterCity(city: string ) {    
        await this.city.fill('Test City')
    }   

    async enterRegion(region: string ) {
        
    }   

    async enterZip(zip: string ) {
        await this.zip.fill('12345')
    }

    async enterCountry(country: string ) {
        
    }

    async enterLogInName(logInName: string ) {
        await this.logInName.fill('TestUser')
    }   

    async enterPassword(password: string ) {
        await this.password.fill('TestPassword')
    }   

    async enterPasswordConfirm(password: string ) {
        await this.pasdswordConfirm.fill('TestPassword')
    }           

    async clickSubscribe() {
        await this.subscribe.click()
    }   

    async clickPrivacyPolicy() {
        await this.privacyPolicy.click()
    }   
    
    async clickContinue() {
        await this.continueButton.click()
    }
}