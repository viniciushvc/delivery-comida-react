import React from 'react'

import * as S from './styled'

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderBrand>
        <S.HeaderLink to="/" exact>
          Delivery
        </S.HeaderLink>
      </S.HeaderBrand>
    </S.HeaderWrapper>
  )
}
