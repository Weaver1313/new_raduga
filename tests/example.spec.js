import { test } from "../src/fixtures/index";

test.describe("Проверка страницы логина", () => {
    test.beforeEach("Открытие страницы", async ({ app }) => {
        await app.base.openAuthPage();
    });
    test("Авторизация", async ({ app }) => {
        await app.loginPage.signIn();
    });

    test("Смена пароля", async ({ app }) => {
        await app.loginPage.resetPassword();
    });
});
