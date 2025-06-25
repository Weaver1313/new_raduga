import { expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

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
}
