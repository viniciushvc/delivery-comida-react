import React from 'react'

import * as S from './styled'

export default function PageTitle({ children, text }) {
  return (
    <S.Title>
      {children}
      {text}
    </S.Title>
  )
}
