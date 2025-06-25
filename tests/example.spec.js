import { test, expect } from "@playwright/test";
import { Base } from "../src/pages/index";
import dotenv from "dotenv";

dotenv.config();

test("has title", async ({ page }) => {
    const base = new Base(page);
    await base.openAuthPage();
    await base.loginPage.signIn();
});
