import dotenv from "dotenv";
import { LoginWindow } from "../../src/components/index";
import { Base } from "./Base";

dotenv.config();

export class Login {
    constructor(page) {
        this.loginWindow = new LoginWindow(page);
    }

    async signIn() {
        await this.loginWindow.inputLoginFill();
        await this.loginWindow.inputPasswordFill();
        await this.loginWindow.buttonSignInClick();
    }
}
