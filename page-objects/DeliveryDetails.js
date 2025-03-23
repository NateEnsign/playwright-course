import { expect } from '@playwright/test';

export class DeliveryDetails {
    constructor (page){
        this.page = page;

        this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
        this.streetInput = page.getByRole('textbox', { name: 'Street' });
        this.postalCodeInput = page.getByRole('textbox', { name: 'Post code' });
        this.cityInput = page.getByRole('textbox', { name: 'City' });
        this.countryDropdown = page.locator('[data-qa="country-dropdown"]');
        this.saveAddressBtn = page.locator('[data-qa="save-address-button"]');
        this.savedAddressContainer = page.locator('[data-qa="saved-address-container"]');
        this.savedFirstName = page.locator('[data-qa="saved-address-firstName"]');
        this.savedLastName = page.locator('[data-qa="saved-address-lastName"]');
        this.savedStreet = page.locator('[data-qa="saved-address-street"]');
        this.savedPostalCode = page.locator('[data-qa="saved-address-postcode"]');
        this.savedCity = page.locator('[data-qa="saved-address-city"]');
        this.savedCountry = page.locator('[data-qa="saved-address-country"]');
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
    }

    saveDetails = async (userAddress) => {
        const addressCountBeforeSave = await this.savedAddressContainer.count();
        await this.saveAddressBtn.waitFor();
        await this.saveAddressBtn.click();
        await expect(this.savedAddressContainer).toHaveCount(addressCountBeforeSave + 1);
        await this.savedFirstName.first().waitFor();
        expect(await this.savedFirstName.first().innerText()).toBe(await this.firstNameInput.inputValue());
        await this.savedLastName.first().waitFor();
        expect(await this.savedLastName.first().innerText()).toBe(await this.lastNameInput.inputValue());
        await this.savedStreet.first().waitFor();
        expect(await this.savedStreet.first().innerText()).toBe(await this.streetInput.inputValue());
        await this.savedPostalCode.first().waitFor();
        expect(await this.savedPostalCode.first().innerText()).toBe(await this.postalCodeInput.inputValue());
        await this.savedCity.first().waitFor();
        expect(await this.savedCity.first().innerText()).toBe(await this.cityInput.inputValue());
        await this.savedCountry.first().waitFor();
        expect(await this.savedCountry.first().innerText()).toBe(await this.countryDropdown.inputValue());


        await this.page.pause();
    }
}