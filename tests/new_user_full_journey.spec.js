import { test } from "@playwright/test";
import { ProductPage } from "../page-objects/ProductPage";

test.only("New user full end-to-end test journey", async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.visit();
  await productPage.addProductToBasket(0);
  await productPage.addProductToBasket(1);
  await productPage.addProductToBasket(2);
  await page.pause();
});
