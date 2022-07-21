import PropTypes from 'prop-types'
import '../index.css'
import cn from 'classnames'

import icon from './img/cancel.svg'

import styles from './UIInput.module.css'

const UiInput = ({
  value,
  handleInputChange,
  placeholder,
  classes
}) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => handleInputChange(e.target.value)}/>
    <img
      src={icon}
      alt="clear search input"
      onClick={() => value && handleInputChange('')}
      className={cn(styles.clear, !value && styles.clear__disabled)}/>
  </div>
)

UiInput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
}

export default UiInput