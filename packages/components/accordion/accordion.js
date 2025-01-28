import { LitElement, html, css } from "lit";

export class Accordion extends LitElement {
  static styles = css`
    /* Add styles here */
  `;

  render() {
    return html`
      <div>
        <p>Accordion works!</p>
      </div>
    `;
  }
}

customElements.define("ucds-accordion", Accordion);
