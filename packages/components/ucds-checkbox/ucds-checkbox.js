import { LitElement, html, css } from "lit";
import "@ucalgary-design-system/tokens/dist/css/_variables.css";

export class UcdsCheckbox extends LitElement {
  static styles = css`
    /* Add styles here */
    p {
      background-color: var(--ucds-color-action-inverse-active);
    }
  `;

  render() {
    return html`
      <div>
        <p>UcdsCheckbox works!</p>
      </div>
    `;
  }
}

customElements.define("ucds-checkbox", UcdsCheckbox);
