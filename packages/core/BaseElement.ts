import {LitElement, css, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('base-element')
export class BaseElement extends LitElement {
    static styles = css`
        * {
        }

  ` as CSSResultGroup;
}
