import styled from "styled-components";

interface IContainerProps{
  img: string
}

export const Container = styled.div<IContainerProps>`
  height: 100vh;
  padding: 2rem 0 2rem;
  background-image: url(${props => props.img});
`;

export const Content = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1.5rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;