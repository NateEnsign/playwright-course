import {test} from '@playwright/test'

test("Product Page Add To Basket", async ({page}) => {
    await page.goto("localhost:2221")

    const addToBasketButton = page.locator('[data-qa"product-button"]').first()
    const basketCounter = page.locator('[data-qa="header-basket-count"]')
    

    await page.pause()
})