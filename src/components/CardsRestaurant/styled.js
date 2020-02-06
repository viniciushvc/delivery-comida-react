import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1 0 500px;
`

export const Card = styled(Link)`
  margin: 10px;
  display: flex;
  align-items: center;
  color: #222;
  transition: 0.3s;
  border: 1px solid transparent;
  border-radius: 5px;

  &:hover {
    border: 1px solid #ddd;
  }
`

export const CardImage = styled.img`
  width: 150px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  display: inline-block;
`

export const CardContent = styled.div`
  padding: 10px;
`

export const CardTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const CardCategory = styled.h2`
  font-size: 12px;
  font-weight: 500;
`

export const CardFreight = styled.h2`
  margin-top: 5px;
  font-size: 12px;
  color: #333;
`
