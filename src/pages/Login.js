import dotenv, { config } from "dotenv";
import { LoginWindow } from "../../src/components/index";

dotenv.config();

export class Login {
    constructor(page) {
        this.page = page;
        this.loginWindow = new LoginWindow(page);
    }

    async signIn() {
        await this.loginWindow.inputLoginFill();
        await this.loginWindow.inputPasswordFill();
        await this.loginWindow.buttonSignInClick();
    }
}
