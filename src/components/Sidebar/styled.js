import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const FlexWrapper = styled.div`
  display: flex;
  padding: 20px;

  @media (max-width: 720px) {
    display: block;
    padding: 10px;
  }
`

export const SidebarWrapper = styled.div`
  width: 10%;
  margin-right: 20px;
  border-radius: 8px;
  background-color: #fff;

  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const SidebarList = styled.ul`
  width: 100%;

  @media (max-width: 720px) {
    overflow: auto;
    white-space: nowrap;
  }
`

export const SidebarItem = styled.li`
  @media (max-width: 720px) {
    display: inline-block;
  }
`

export const SidebarLink = styled(NavLink)`
  display: block;
  padding: 15px 20px;
  font-size: 13px;
  color: #5d5d5d;
`
