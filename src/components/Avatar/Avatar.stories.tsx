import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from ".";
import { IconHome } from '../Icon/icons/iconHome/Index';

export default {
    title: 'Dev/Avatar',
    component: Avatar,
  } as ComponentMeta<typeof Avatar>;
  
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Img',
  src: "https://picsum.photos/200",
  status: 'available',
}

export const Text = Template.bind({});
Text.args = {
  type: 'Text',
}

export const Icon = Template.bind({});
Icon.args = {
  type: 'Icon',
  AvaIcon: IconHome,
}