import { test } from "@playwright/test";
import { ProductPage } from "../page-objects/ProductPage";
import { Navigation } from '../page-objects/Navigation';
import { Checkout } from '../page-objects/Checkout';
import { LoginPage } from "../page-objects/LoginPage";
import { RegisterPage} from "../page-objects/RegisterPage";

import { v4 as uuidv4 } from 'uuid'; 

test.only("New user full end-to-end test journey", async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.visit();
  await productPage.sortByCheapest();
  await productPage.addProductToBasket(0);
  await productPage.addProductToBasket(1);
  await productPage.addProductToBasket(2);
  const navigation = new Navigation(page);
  await navigation.goToCheckout();

  const checkout = new Checkout(page);
  await checkout.removeCheapestProduct();
  await checkout.continueToCheckout();

  const login = new LoginPage(page);
  await login.switchToRegister();

  const registerPage = new RegisterPage(page);
  const email = uuidv4() + '@gmail.com';
  const password = uuidv4();
  await registerPage.signUpAsNewUser(email,password);

//   await page.pause();
  
});
