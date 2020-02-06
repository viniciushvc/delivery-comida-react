import React from 'react'

import * as S from './styled'

export default function PageTitle({ children, text, margin }) {
  return (
    <S.Title margin={margin}>
      {children}
      {text}
    </S.Title>
  )
}
