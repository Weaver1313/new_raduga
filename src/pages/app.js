import { Login, Base } from "./index";

export class App {
    constructor(page) {
        this.loginPage = new Login(page);
        this.base = new Base(page);
    }
}
