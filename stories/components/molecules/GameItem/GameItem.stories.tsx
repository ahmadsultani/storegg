import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameItem from "../../../../components/molecules/GameItem";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
} as ComponentMeta<typeof GameItem>;

const Template: ComponentStory<typeof GameItem> = (args) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Mobile Legends",
  category: "Mobile",
  image: "/img/Thumbnail-1.png",
}