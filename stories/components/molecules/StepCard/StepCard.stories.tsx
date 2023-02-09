import { ComponentMeta, ComponentStory } from '@storybook/react';
import StepCard from "../../../../components/molecules/StepCard";

export default {
  title: "Components/Molecules/StepCard",
  component: StepCard,
} as ComponentMeta<typeof StepCard>;

const Template: ComponentStory<typeof StepCard> = (args) => <StepCard {...args} />;

export const Default = Template.bind({});
{/* <StepCard icon="step-1" title="1. Start" desc="Pilih salah satu game yang ingin kamu top up"/> */}

Default.args = {
  icon: "step-1",
  title: "1. Start",
  desc: "Pilih salah satu game yang ingin kamu top up",
};