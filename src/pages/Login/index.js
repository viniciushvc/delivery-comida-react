import React from 'react'

import * as S from './styled'

export default function Login() {
  return (
    <S.HomeWrapper>
      <S.FormContainer>
        <S.Form>
          <S.FormTitle>Bem vindo ao Delivery</S.FormTitle>

          <S.FormRouter to="/">Realizar pedido</S.FormRouter>
        </S.Form>
      </S.FormContainer>
    </S.HomeWrapper>
  )
}
