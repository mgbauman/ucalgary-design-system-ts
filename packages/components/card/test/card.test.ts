/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from '@open-wc/testing';
import '../card.js';

describe('Card', () => {
  it('renders properly', async () => {
    const el = await fixture(html`<ucds-card></ucds-card>`);
    expect(el).shadowDom.to.equal('<div><p>Card works!</p></div>');
  });
});
