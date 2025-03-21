import { expect } from '@playwright/test';

export class Checkout {
  constructor(page) {
    this.page = page;

    this.basketCards = page.locator('[data-qa="basket-card"]');
    this.basketItemPrice = page.locator('[data-qa="basket-item-price"]');
    this.basketItemRemoveButton = page.locator(
      '[data-qa="basket-card-remove-item"]'
    );
    this.continueToCheckoutBtn = page.locator('[data-qa="continue-to-checkout"]');

  };

  removeCheapestProduct = async () => {
    await this.basketCards.first().waitFor();
    const itemsBeforeRemoval = await this.basketCards.count();
    await this.basketItemPrice.first().waitFor();
    const allPrice = await this.basketItemPrice.allInnerTexts();
    const numberPrices = allPrice.map((el) => +el.replace("$", ""));
    const smallestPrice = Math.min(...numberPrices);
    const smallestPriceInx = numberPrices.indexOf(smallestPrice);
    const specificRemoveBtn = this.basketItemRemoveButton.nth(smallestPriceInx);
    await specificRemoveBtn.waitFor();
    await specificRemoveBtn.click();
    await expect(this.basketCards).toHaveCount(itemsBeforeRemoval - 1);

    // await this.page.pause();
  };

  continueToCheckout = async () => {
    await this.continueToCheckoutBtn.waitFor();
    await this.continueToCheckoutBtn.click();
    await this.page.waitForURL(/\/login/, {timeout: 3000});
  }

}
