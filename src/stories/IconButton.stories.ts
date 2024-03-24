import { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton";
import { fn } from "@storybook/test";
import likeIcon from "../../public/like.svg";

const meta = {
  title: "IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    icon: likeIcon,
  }
}