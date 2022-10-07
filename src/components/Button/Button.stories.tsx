import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Dev/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Button',
};
Default.storyName = 'Default';

export const Primary = Template.bind({});
Primary.args = {
  buttonText: 'Button',
  type: 'primary',
};
Primary.storyName = 'Primary';

export const IconButton = Template.bind({});
IconButton.args = {
  buttonText: 'Icon',
  type: 'link',
}