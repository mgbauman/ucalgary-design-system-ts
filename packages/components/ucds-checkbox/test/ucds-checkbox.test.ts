/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from "@open-wc/testing";
import "../ucds-checkbox.js";

describe("UcdsCheckbox", () => {
  it("renders properly", async () => {
    const el = await fixture(html`<ucds-checkbox></ucds-checkbox>`);
    expect(el).shadowDom.to.equal("<div><p>UcdsCheckbox works!</p><p tabindex=\"-1\" class=\"green-text\">This should be green</p></div>");
  });
});

describe("UcdsCheckboxAccessibility", () => {
  it("works", async () => {
    const el = await fixture(html` <ucds-checkbox></ucds-checkbox> `);
    await expect(el).to.be.accessible();
  });
});
