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
    }

    async inputPasswordFill() {
        await this.inputPassword.fill(process.env.PASSWORD);
    }

    async buttonSignInClick() {
        await this.buttonSignIn.click();
    }
}
