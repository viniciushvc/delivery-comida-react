import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CategoryActions from '../../store/actions/category'
import RestaurantActions from '../../store/actions/restaurant'

import {
  Container,
  Sidebar,
  CardsRestaurant,
  PageTitle,
} from '../../components'

import * as S from './styled'

function Home(props) {
  const { id } = props.match.params

  const { categories } = useSelector(state => state.category)
  const { restaurants } = useSelector(state => state.restaurant)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CategoryActions.requestGet())

    dispatch(RestaurantActions.requestGet())
  }, [dispatch])

  return (
    <Container>
      <Sidebar menu={categories}>
        <S.HomeWrapper>
          <PageTitle>{id}</PageTitle>

          <CardsRestaurant items={restaurants} />
        </S.HomeWrapper>
      </Sidebar>
    </Container>
  )
}

export default Home
