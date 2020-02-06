import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export default function Button({ children, className, type, onClick, color }) {
  return (
    <S.ButtonWrapper
      type={type}
      className={className}
      onClick={onClick}
      color={color}
    >
      {children}
    </S.ButtonWrapper>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  className: '',
  onClick: undefined,
}
