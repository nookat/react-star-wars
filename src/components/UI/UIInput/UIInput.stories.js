import { useState } from 'react'
import UiInput from './UIInput'
import PropTypes from 'prop-types'

export default {
  title: 'Ui-Kit/UiInput',
  component: UiInput
}

const Template = (args) => {
  const [value, setValue] = useState('')
  const handleInputChange = value => {
    setValue(value)
  }

  return (
    <UiInput {...args} value={value} handleInputChange={handleInputChange}/>
  )
}

const props = {
  value: '',
  handleInputChange: () => console.log('input change'),
  placeholder: 'Placeholder',
  classes: '',
}

export const Default = Template.bind({})

Default.args = {
  ...props
}