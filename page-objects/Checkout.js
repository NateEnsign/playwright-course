export class Checkout {
    constructor(page){
        this.page = page;

        this.basketCards = page.locator('[data-qa="basket-card"]');
        this.basketItemPrice = page.locator('[data-qa="basket-item-price"]');
        this.basketItemRemoveButton = page.locator('[data-qa="basket-card-remove-item"]');

    }

    removeCheapestProduct = async () => {
        await this.basketCards.first().waitFor();
        await this.basketItemPrice.first().waitFor();
        const allPrice = await this.basketItemPrice.allInnerTexts();
        const numberPrices = allPrice.map((el) => +el.replace('$',''));
        const smallestPrice = Math.min(...numberPrices);
        const smallestPriceInx = numberPrices.indexOf(smallestPrice);
        await this.basketItemRemoveButton.nth(smallestPriceInx).waitFor()
        await this.basketItemRemoveButton.nth(smallestPriceInx).click();

        await this.page.pause()
    }
}