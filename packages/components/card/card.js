import { LitElement, html, css } from "lit";

export class Card extends LitElement {
  static styles = css`
    /* Add styles here */
  `;

  render() {
    return html`
      <div>
        <p>Card works!</p>
      </div>
    `;
  }
}

customElements.define("ucds-card", Card);
