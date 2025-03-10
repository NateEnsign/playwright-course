import { test } from "@playwright/test";
import { ProductPage } from "../page-objects/ProductPage";
import { Navigation } from '../page-objects/Navigation';

test.only("New user full end-to-end test journey", async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.visit();
  await productPage.addProductToBasket(0);
  await productPage.addProductToBasket(1);
  await productPage.addProductToBasket(2);
  const navigation = new Navigation(page);
  await navigation.goToCheckout();
  await page.pause();
});
