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

        console.warn({numberPrices});
        await this.page.pause()
    }
}