import React from "react";

import { SideBar } from "../components/SideBar";

export default {
  title: "Components/SideBar",
  component: SideBar,
  args: {},
};

const Template = (args) => <SideBar {...args} />;

export const Story = Template.bind({});
Story.args = {};
