import { expect } from "@playwright/test";

export class LoginWindow {
    constructor(page) {
        this.page = page;
    }

    get inputLogin() {
        return this.page.locator("#sdo-login");
    }

    get inputPassword() {
        return this.page.locator("#sdo-password");
    }

    get buttonSignIn() {
        return this.page.getByRole("button", { name: "Login" });
    }

    get buttonResetPassword() {
        return this.page.getByRole("button", { name: "Forgot password?" });
    }

    get inputEmail() {
        return this.page.getByRole("textbox");
    }

    get buttonSendResetPassword() {
        return this.page.getByRole("button", { name: "Reset" });
    }

    get messageInfoResetPassword() {
        return this.page.getByText(
            "The link to change your password was sent to the email"
        );
    }

    async inputLoginFill(login) {
        await this.inputLogin.fill(login);
        await expect(this.inputLogin).toHaveValue(login);
    }

    async inputPasswordFill(password) {
        await this.inputPassword.fill(password);
        await expect(this.inputPassword).toHaveValue(password);
    }

    async buttonSignInClick() {
        await this.buttonSignIn.click();
    }

    async buttonResetPasswordClick() {
        await this.buttonResetPassword.click();
    }

    async inputEmailFill(email) {
        await this.inputEmail.fill(email);
        await expect(this.inputEmail).toHaveValue(process.env.LOGIN);
    }

    async buttonSendResetPasswordClick() {
        await this.buttonSendResetPassword.click();
        await expect(this.messageInfoResetPassword).toHaveText(
            "The link to change your password was sent to the email"
        );
    }
}
