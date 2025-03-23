export class DeliveryDetails {
    constructor (page){
        this.page = page;

        this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
        this.streetInput = page.getByRole('textbox', { name: 'Street' });
        this.postalCodeInput = page.getByRole('textbox', { name: 'Post code' });
        this.cityInput = page.getByRole('textbox', { name: 'City' });
        this.countryDropdown = page.locator('[data-qa="country-dropdown"]');
    }

    fillDetails = async (userAddress) => {
        await this.firstNameInput.waitFor();
        await this.firstNameInput.fill(userAddress.firstName);
        await this.lastNameInput.waitFor();
        await this.lastNameInput.fill(userAddress.lastName);
        await this.streetInput.waitFor();
        await this.streetInput.fill(userAddress.street);
        await this.postalCodeInput.waitFor();
        await this.postalCodeInput.fill(userAddress.postalCode);
        await this.cityInput.waitFor();
        await this.cityInput.fill(userAddress.city);
        await this.countryDropdown.waitFor();
        await this.countryDropdown.selectOption(userAddress.country);
        await this.page.pause();
    }
}