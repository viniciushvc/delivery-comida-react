import styled from 'styled-components'
import { Link } from 'react-router-dom'

import bg from '../../assets/images/bg.jpg'

export const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 61px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
`

export const FormContainer = styled.div`
  width: 400px;
`

export const Form = styled.div`
  width: 100%;
  box-shadow: 4px 4px 44px rgba(0, 0, 0, 0.1);
  padding: 50px;
  background-color: #fff;
  border-radius: 4px;

  @media (max-width: 720px) {
    padding: 30px;
    box-shadow: none;
  }
`

export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px 0;
`

export const FormRouter = styled(Link)`
  color: #e1112c;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
    text-decoration: none;
  }
`
