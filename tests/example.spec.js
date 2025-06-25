import { test } from "@playwright/test";
import { App } from "../src/pages/index";
import dotenv from "dotenv";

dotenv.config();

test("Авторизация", async ({ page }) => {
    const app = new App(page);
    await app.base.openAuthPage();
    await app.loginPage.signIn();
});
