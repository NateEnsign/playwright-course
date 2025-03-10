import { test, expect } from "@playwright/test";

test("Product Page Add To Basket", async ({ page }) => {
  await page.goto("/");

  const addToBasketButton = page.locator('[data-qa="product-button"]').first();
  const basketCounter = page.locator('[data-qa="header-basket-count"]');
  

  await addToBasketButton.waitFor(); //using .waitFor() gives a much more clear error message for why the test failed
  await expect(addToBasketButton).toHaveText("Add to Basket");
  await expect(basketCounter).toHaveText("0");

  await addToBasketButton.click();

  await expect(addToBasketButton).toHaveText("Remove from Basket");
  await expect(basketCounter).toHaveText("1");

  const checkoutLink = page.getByRole('link', { name: 'Checkout' });

  await checkoutLink.waitFor();
  await expect(checkoutLink).toHaveText("Checkout");
  
  await checkoutLink.click();

  await page.waitForURL('/basket');



  await page.pause();
});
