export class Checkout {
    constructor(page){
        this.page = page;

        this.basketCards = page.locator('[data-qa="basket-card"]');
        this.basketItemPrice = page.locator('[data-qa="basket-item-price"]');
        this.basketItemRemoveButton = page.locator('[data-qa="basket-card-remove-item"]');

    }

    removeCheapestProduct = async () => {
        await this.page.pause()
    }
}