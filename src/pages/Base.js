import dotenv from "dotenv";

dotenv.config();

export class Base {
    constructor(page) {
        this.page = page;
        this.URL = process.env.URL;
    }

    async openAuthPage() {
        await this.page.goto(this.URL);
    }
}
