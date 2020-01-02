import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  color: #fff;
  user-select: none;
  border-radius: 2px;
  border: none;
  padding: 0.4rem 0.75rem;
  cursor: pointer;
  font-family: inherit;
  transition: 0.3s;
  background-color: ${props => props.color || '#ddd'};

  &:hover {
    box-shadow: inset 0 0 0 99999px rgba(255, 255, 255, 0.1);
  }

  &.block {
    display: block;
    width: 100%;
  }

  &.lg {
    padding: 0.7rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  &.bold {
    font-weight: 700;
  }

  &.medium {
    font-weight: 500;
  }

  &.round {
    border-radius: 30px;
  }
`
