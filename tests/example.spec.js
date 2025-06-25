import { test } from "../src/fixtures/index";

test("Авторизация", async ({ app }) => {
    await app.base.openAuthPage();
    await app.loginPage.signIn();
});
