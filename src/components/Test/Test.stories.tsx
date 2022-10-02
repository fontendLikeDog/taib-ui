import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Test } from './Test';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Test',
  component: Test,
} as ComponentMeta<typeof Test>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button777',
};
Primary.storyName = 'I am the primary';