import {html, css, unsafeCSS} from "lit";
import {customElement} from 'lit/decorators.js';
import {BaseElement} from '@ucalgary-design-system/core/BaseElement.js';
import "@ucalgary-design-system/tokens/dist/css/_variables.css";
import styles from "./ucds-checkbox.css?inline";

@customElement('ucds-checkbox')
export class UcdsCheckbox extends BaseElement {
    static styles = [
        BaseElement.styles,
        css`
          /* Add styles here */
          a {
            color: red;
          }
        `,
        /* https://lit.dev/docs/api/styles/#unsafeCSS */
        unsafeCSS(styles)
    ];

    render() {
        return html`
          <div>
            <p>UcdsCheckbox works!</p>
            <p tabindex="-1" class="green-text">This should be green</p>
          </div>
        `;
    }
}
