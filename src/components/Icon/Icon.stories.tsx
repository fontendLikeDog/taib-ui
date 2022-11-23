import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconHome} from './icons/iconHome/Index'

export default {
    title: 'General/Icon',
    component: IconHome,
} as ComponentMeta<typeof IconHome>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof IconHome> = (args) => <IconHome {...args} />;

export const Default = Template.bind({});

