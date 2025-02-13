import {html} from 'lit';
import '../ucws-button.js';

// More on how to set up stories at:
// https://storybook.js.org/docs/writing-stories
export default {
  title: 'UcwsButton',
  tags: ['autodocs'],
  component: 'ucws-button',
  argTypes: {
    buttonType: {
      options: ['default', 'ghost'],
      control: 'radio',
      description: 'The type of button. Accepted options are `default` and `ghost`. Invalid options revert to default state.',
      table: {
        defaultValue: {
          summary: 'default'
        }
      },
    },
    href: {
      control: {type: 'text'},
      description: 'An href for the button',
    },
    slot: {
      table: {
        disable: true
      }
    },
  },
};

function Template({buttonType = 'default', href = '#', slot}) {
  return html`
    <ucws-button
      button-type=${buttonType}
      href=${href}
    >
      ${slot}
    </ucws-button>
  `;
}

// More on writing stories with args:
// https://storybook.js.org/docs/writing-stories/args
export const DefaultButton = Template.bind({});
DefaultButton.args = {
  slot: html`Button text`,
  href: 'https://ucalgary.ca',
};

export const GhostButton = Template.bind({});
GhostButton.args = {
  buttonType: 'ghost',
  slot: html`Button text`,
  href: 'https://ucalgary.ca',
};
