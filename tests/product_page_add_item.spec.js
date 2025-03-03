import {test} from '@playwright/test'

test("Product Page Add To Basket", async ({page}) => {
    await page.goto("localhost:2221")

    const addToBasketButton = page.locator('div').filter({ hasText: /^499\$Add to Basket$/ }).getByRole('button')
    await addToBasketButton.waitFor() //using .waitFor() gives a much more clear error message for why the test failed
    await addToBasketButton.click()

    await page.pause()
})