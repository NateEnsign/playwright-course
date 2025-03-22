export class RegisterPage {
    constructor(page) {
        this.page = page

        this.emailInput = page.getByPlaceholder('E-Mail');
        this.passwordInput = page.getByPlaceholder('Password');
        this.regsiterBtn = page.getByRole('button', { name: 'Register' });
    }

    signUpAsNewUser = async () => {
        
        await this.emailInput.waitFor();
        await this.emailInput.fill('test@test.com');

        await this.passwordInput.waitFor();
        await this.passwordInput.fill('password');

        await this.regsiterBtn.waitFor();
        await this.regsiterBtn.click();

        await this.page.pause();
    }
}