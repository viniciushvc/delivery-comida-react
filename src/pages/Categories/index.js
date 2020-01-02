import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import { Container, PageTitle } from '../../components'

import * as S from './styled'

export default function Categories() {
  const [list, setList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get('/categories')

      setList(data)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <PageTitle text="Categorias" />

      <S.NewButton to="/categories/new">Nova categoria</S.NewButton>

      {JSON.stringify(list)}
    </Container>
  )
}
