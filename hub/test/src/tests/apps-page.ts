import { browser, by, element } from "protractor";
import { env } from "../../env";
import { authorize } from "../helpers/authorize";

describe("apps-page", function () {
  beforeAll(authorize);

  it("should load", async () => {
    await browser.get(`${env.URL}#/apps`);
    const apps = await element.all(by.css("app-launcher"));
    expect(apps.length).toBe(7);
  });
});
