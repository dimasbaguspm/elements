import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Heading as HeadingComponent } from '../components/heading';

export default {
  title: 'Atomic/Typography/Heading',
  component: HeadingComponent,
  args: {
    children: 'test text',
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
} as ComponentMeta<typeof HeadingComponent>;

const Template: ComponentStory<typeof HeadingComponent> = (args) => <HeadingComponent {...args} />;
export const Heading = Template.bind({});
