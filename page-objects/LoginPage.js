export class LoginPage {
    constructor(page) {
        this.page = page;

        this.registerBtn = page.locator('[data-qa="go-to-signup-button"]');
    }

    switchToRegister = async () => {
        await this.registerBtn.waitFor();
        await this.registerBtn.click();
        await this.page.waitForURL(/\/signup/, {timeout: 3000});
        // await this.page.pause();
      }

}