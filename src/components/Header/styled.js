import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  background-color: #ea1d2c;
  color: #fff;
  display: flex;
  padding: 20px;
  position: sticky;
  z-index: 1;

  @media (max-width: 720px) {
    top: 0;
  }
`

export const HeaderBrand = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`

export const HeaderList = styled.ul`
  margin-left: auto;
  display: inherit;
  align-items: center;
  margin-right: 1rem;
`

export const HeaderItem = styled.li`
  &:not(:first-child) {
    margin-left: 2rem;
  }
`

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: currentColor;

  &.selected {
    color: #ea1d2c;
    background-color: #fff;
    font-weight: 700;
    padding: 7px;
    border-radius: 5px;
  }
`
