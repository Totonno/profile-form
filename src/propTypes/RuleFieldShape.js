import PropTypes from 'prop-types'

export default PropTypes.shape({
  /** Name for both the field and the property */
  name: PropTypes.string.isRequired,
  /** Maximum length of the field */
  maxLength: PropTypes.number.isRequired,
  /** i18n code for the label to be displayed over the field */
  label: PropTypes.string.isRequired,
  /** Whether the field is required or not */
  required: PropTypes.bool,
  /** Whether the field should be hidden or not */
  hidden: PropTypes.bool,
  /** Mask to be applied on the value */
  mask: PropTypes.string,
  /** A function to evaluate if the value is valid */
  validate: PropTypes.func,
})
