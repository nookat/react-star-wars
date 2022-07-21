import UIButton from './UiButton'

export default {
  title: 'Ui-Kit/UiButton',
  component: UIButton
}

const Template = (args) => <UIButton {...args} />

const props = {
  text: 'hello',
  onClick: () => console.log('button clicked'),
  disabled: false,
  theme: 'light',
  classnames: ''
}

export const Light = Template.bind({})

Light.args = {
  ...props,
  theme: 'light'
}

export const Dark = Template.bind({})

Dark.args = {
  ...props,
  theme: 'dark'
}

export const Disabled = Template.bind({})

Disabled.args = {
  ...props,
  disabled: true
}