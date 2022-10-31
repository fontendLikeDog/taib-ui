import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from "./Avatar";

export default {
    title: 'Dev/Avtar',
    component: Avatar,
  } as ComponentMeta<typeof Avatar>;
  
  const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;