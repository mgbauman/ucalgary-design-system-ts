import { html, css, unsafeCSS } from 'lit';
import {customElement} from 'lit/decorators.js';
import {BaseElement} from '@ucalgary-design-system/core/BaseElement.js';
import "@ucalgary-design-system/tokens/dist/css/_variables.css";
import styles from "./card.css?inline";

@customElement('ucds-card')
export class Card extends BaseElement {
  static styles = [
    BaseElement.styles,  
    css`
      /* Add styles here */
    `,
    /* https://lit.dev/docs/api/styles/#unsafeCSS */
    unsafeCSS(styles)
  ];

  render() {
    return html`
      <div>
        <p>Card works!</p>
      </div>
    `;
  }
}
