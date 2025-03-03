import {test} from '@playwright/test'

test("Product Page Add To Basket", async ({page}) => {
    await page.goto("localhost:2221")

    const addToBasketButton = page.locator('div').filter({ hasText: /^499\$Add to Basket$/ }).getByRole('button')
    await addToBasketButton.click()

    await page.pause()
})