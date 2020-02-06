import React from 'react'

import * as S from './styled'

export default function Sidebar({ children, menu }) {
  return (
    <S.FlexWrapper>
      <S.SidebarWrapper>
        <S.SidebarList>
          {menu?.map(category => (
            <S.SidebarItem key={category.id}>
              <S.SidebarLink to={`/category/${category.id}`}>
                {category.name}
              </S.SidebarLink>
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.SidebarWrapper>

      {children}
    </S.FlexWrapper>
  )
}
