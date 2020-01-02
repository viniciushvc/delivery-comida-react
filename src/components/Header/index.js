import React from 'react'

import * as S from './styled'

import items from './content'

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderBrand>
        <S.HeaderLink to="/" exact>
          Delivery
        </S.HeaderLink>
      </S.HeaderBrand>

      <S.HeaderList>
        {items.map(item => (
          <S.HeaderItem key={item.title}>
            <S.HeaderLink to={item.link} activeClassName="selected">
              {item.title}
            </S.HeaderLink>
          </S.HeaderItem>
        ))}
      </S.HeaderList>
    </S.HeaderWrapper>
  )
}
