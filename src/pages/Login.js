import dotenv from "dotenv";
import { LoginWindow } from "../../src/components/index";

export class Login {
    constructor(page) {
        this.loginWindow = new LoginWindow(page);
    }

    async signIn() {
        await this.loginWindow.inputLoginFill();
        await this.loginWindow.inputPasswordFill();
        await this.loginWindow.buttonSignInClick();
    }

    async resetPassword() {
        await this.loginWindow.buttonResetPasswordClick();
        await this.loginWindow.inputEmailFill();
        await this.loginWindow.buttonSendResetPasswordClick();
    }
}
