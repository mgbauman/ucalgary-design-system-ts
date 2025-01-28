import { LitElement, html, css } from "lit";

export class UcdsRadio extends LitElement {
  static styles = css`
    /* Add styles here */
  `;

  render() {
    return html`
      <div>
        <p>UcdsRadio works!</p>
      </div>
    `;
  }
}

customElements.define("ucds-radio", UcdsRadio);
