import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from ".";

export default {
    title: 'Dev/Avatar',
    component: Avatar,
  } as ComponentMeta<typeof Avatar>;
  
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://picsum.photos/200",
  isImg: true,
  isStatus: true,
}