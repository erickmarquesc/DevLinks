import styled from "styled-components";

export const ButtonContainer = styled.div`
  gap: 16px;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  a{
    width: 100%;
  }
`;

export const Button = styled.button`

width: 312px;

  @media (min-width: 700px){
    width: 588px;
  }

  color: white;
  font: normal 16px;
  padding: 16px 24px;
  border-radius: 8px;
  border: solid 1px white;
  background: rgba(0,0,0,0.2);

  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.5);
    cursor: pointer;
  }
`;