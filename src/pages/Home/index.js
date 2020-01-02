import React from 'react'

import * as S from './styled'

export default function Home() {
  return (
    <S.HomeWrapper>
      <S.FormContainer>
        <S.Form>
          <S.FormTitle>Bem vindo ao Delivery</S.FormTitle>

          <S.FormRouter to="/shopping">Realizar pedido</S.FormRouter>
        </S.Form>
      </S.FormContainer>
    </S.HomeWrapper>
  )
}
