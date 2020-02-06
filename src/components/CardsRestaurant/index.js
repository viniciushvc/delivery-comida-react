import React from 'react'

import * as S from './styled'

export default function CardRestaurant({ items }) {
  return (
    <S.CardWrapper>
      {items?.map(item => (
        <S.Card key={item.id}>
          <S.CardImage src={item.image} />
          <S.CardContent>
            <S.CardTitle>{item.name}</S.CardTitle>
            <S.CardCategory>{item.name}</S.CardCategory>
            <S.CardFreight>{item.name}</S.CardFreight>
          </S.CardContent>
        </S.Card>
      ))}
    </S.CardWrapper>
  )
}
