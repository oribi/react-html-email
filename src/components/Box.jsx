import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'

export default function Box({ children, ...props }) {
  const styleProp = props.style || {};

  const overrideStyle = {};
  if (styleProp.width === '100%') {
    overrideStyle.width = '100% !important' // fix for gmail mobile app overriding 100% tables
  }

  return (
    <table {...props} style={{ ...styleProp, ...overrideStyle }}>
      <tbody>
      {children}
      </tbody>
    </table>
  )
}

Box.propTypes = {
  cellPadding: PropTypes.number,
  cellSpacing: PropTypes.number,
  border: PropTypes.string,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

Box.defaultProps = {
  cellPadding: 0,
  cellSpacing: 0,
  border: '0',
  align: 'left',
  valign: 'top',
  bgcolor: undefined,
  width: undefined,
  height: undefined,
  style: undefined,
  children: undefined,
}
