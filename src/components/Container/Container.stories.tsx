import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Layout/Container",
  component: Container,
} as ComponentMeta<typeof Container>;


//create a “template” of how args map to rendering
const Template: ComponentStory<typeof Container> = (args) => <Container {...args} >
    <div className="w-[50px]">23333377</div>
</Container>

export const Base = Template.bind({});
Base.args = {
}