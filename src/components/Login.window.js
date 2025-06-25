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

    async inputLoginFill() {
        await this.inputLogin.fill(process.env.LOGIN);
        await expect(this.inputLogin).toHaveValue(process.env.LOGIN);
    }

    async inputPasswordFill() {
        await this.inputPassword.fill(process.env.PASSWORD);
        await expect(this.inputPassword).toHaveValue(process.env.PASSWORD);
    }

    async buttonSignInClick() {
        await this.buttonSignIn.click();
    }

    async buttonResetPasswordClick() {
        await this.buttonResetPassword.click();
    }

    async inputEmailFill() {
        await this.inputEmail.fill(process.env.LOGIN);
        await expect(this.inputEmail).toHaveValue(process.env.LOGIN);
    }

    async buttonSendResetPasswordClick() {
        await this.buttonSendResetPassword.click();
        await expect(this.messageInfoResetPassword).toHaveText(
            "The link to change your password was sent to the email"
        );
    }
}
