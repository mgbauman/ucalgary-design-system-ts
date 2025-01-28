/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from "@open-wc/testing";
import "@ucalgary-design-system/ucds-radio";

describe("UcdsRadio", () => {
  it("renders properly", async () => {
    const el = await fixture(html`<ucds-radio></ucds-radio>`);
    expect(el).shadowDom.to.equal("<div><p>UcdsRadio works!</p></div>");
  });
});
