/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from "@open-wc/testing";
import "@ucalgary-design-system/accordion";

describe("Accordion", () => {
  it("renders properly", async () => {
    const el = await fixture(html`<ucds-accordion></ucds-accordion>`);
    expect(el).shadowDom.to.equal("<div><p>Accordion works!</p></div>");
  });
});
