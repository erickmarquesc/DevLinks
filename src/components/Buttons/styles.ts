import styled from "styled-components"

export const Button = styled.a`
  all: inherit;
  color: white;
  min-width: 450px;
  font-size: 1.8rem;
  padding: 12px 24px;
  border-radius: 8px;
  border: solid 1px white;
  background: rgba(0,0,0,0.2);

  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.5);
    cursor: pointer;
  }
`;