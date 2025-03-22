export class DeliveryDetails {
    constructor (page){
        this.page = page;

        this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
        this.streetInput = page.getByRole('textbox', { name: 'Street' });
        this.postalCodeInput = page.getByRole('textbox', { name: 'Post code' });
        this.cityInput = page.getByRole('textbox', { name: 'City' });

    }

    fillDetails = async () => {
        await this.firstNameInput.waitFor();
        await this.firstNameInput.fill('Nate');
        await this.lastNameInput.waitFor();
        await this.lastNameInput.fill('Ensign');
        await this.streetInput.waitFor();
        await this.streetInput.fill('943 n 900 w');
        await this.postalCodeInput.waitFor();
        await this.postalCodeInput.fill('84057');
        await this.cityInput.waitFor();
        await this.cityInput.fill('Orem');
        await this.page.pause();
    }
}