import { LitElement, html, css } from "lit";
// import "/packages/tokens/css/_variables.css";
import "@ucalgary-design-system/tokens/dist/css/_variables.css";

/**
 * Primary UI component for user interaction
 *
 * @element ucws-button
 *
 * @prop {string} buttonType - The type of button. One of {'default', 'ghost'}
 * @prop {string} href - The url the button should send users
 * @slot - This slot is used to put text inside the button
 */
export class UcwsButton extends LitElement {
  static properties = {
    buttonType: { type: String, attribute: "button-type" },
    href: { type: String },
  };

  get buttonType() {
    return this._buttonType;
  }

  set buttonType(value) {
    const allowedTypes = ["default", "ghost", "alt"]; // Allowed values for 'type'.
    if (allowedTypes.includes(value)) {
      this._buttonType = value;
    } else {
      this._buttonType = "default"; // Fallback to 'default' if invalid value
      // is provided.
    }
    this.requestUpdate(); // Trigger re-render when type changes.
  }

  static styles = css`
    .btn {
      position: relative;
      display: inline-block;
      border-radius: 50px;
      padding: 13px 38px;
      text-decoration: none;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      line-height: 25px;
      border: 2px solid currentColor;
    }

    .default,
    .alt {
      color: #fff;
      background-color: var(--ucds-color-action-rest);
      border-color: var(--ucds-color-action-rest);
    }

    .ghost {
      padding: 13px 40px;
      color: inherit;
      background-color: transparent;
    }

    svg {
      width: 25px;
      height: 25px;
      opacity: 0; /* Initially hidden */
      transition:
        right 500ms,
        opacity 500ms;
      position: absolute; /* Position it over the button content */
      right: 50px; /* Initially off */
      top: 50%;
      transform: translateY(-50%);
    }

    .btn:hover {
      background-color: var(--ucds-color-action-hover);
    }

    .btn:hover svg {
      opacity: 1; /* Show the icon on hover */
      right: 15px;
    }

    .ghost:hover {
      color: #fff;
      border-color: transparent;
    }

    .btn:active {
      border-width: 0;
      margin: 2px;
    }

    .alt:active {
      box-shadow: inset 0 3px 3px 0 black;
    }

    .ghost:active {
      color: #fff;
      border-color: transparent;
      background-color: var(--ucds-color-action-active);
    }
  `;

  constructor() {
    super();
    this._buttonType = "default";
    this.href = "";
  }

  render() {
    return html`
      <a class="btn ${this.buttonType}" href="${this.href}" role="button">
        <slot></slot>

        <svg
          class="ucws-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          xml:space="preserve"
        >
          <path
            class="icon"
            fill="#ffffff"
            d="M24.5,15.9c0-0.3-0.1-0.6-0.3-0.8l-5.8-5.7c-0.4-0.4-1.1-0.4-1.5,0s-0.4,1.1,0,1.5l4,3.9H8.6
    c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h12.1l-3.9,4c-0.4,0.4-0.4,1.1,0,1.5c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3l5.4-5.6
    C24.2,16.8,24.5,16.5,24.5,15.9C24.5,16.1,24.5,16.1,24.5,15.9C24.5,16,24.5,16,24.5,15.9z"
          />
        </svg>
      </a>
    `;
  }
}

customElements.define("ucws-button", UcwsButton);
