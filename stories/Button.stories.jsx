import React from 'react'

import { Button } from './../components/atoms/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    mode: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['s', 'm', 'l'],
      control: {
        type: 'inline-radio',
      },
    },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mode: 'primary',
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  mode: 'secondary',
  children: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'l',
  children: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 's',
  children: 'Button',
}
