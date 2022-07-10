import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BodyText as BodyTextComponent } from '../components/body-text';

export default {
  title: 'Atomic/Typography/BodyText',
  component: BodyTextComponent,
  args: {
    children: 'Test BodyText',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    colorText: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'dark', 'white', 'success'],
      },
    },
  },
} as ComponentMeta<typeof BodyTextComponent>;

const Template: ComponentStory<typeof BodyTextComponent> = ({ ...args }) => <BodyTextComponent {...args} />;

export const BodyText = Template.bind({});
