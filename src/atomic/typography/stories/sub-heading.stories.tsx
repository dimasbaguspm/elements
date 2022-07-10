import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Subheading as SubHeadingComponent } from '../components/sub-heading';

export default {
  title: 'Atomic/Typography/Subheading',
  component: SubHeadingComponent,
  args: {
    children: 'Test Subheading',
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
} as ComponentMeta<typeof SubHeadingComponent>;

const Template: ComponentStory<typeof SubHeadingComponent> = ({ ...args }) => <SubHeadingComponent {...args} />;

export const Subheading = Template.bind({});
