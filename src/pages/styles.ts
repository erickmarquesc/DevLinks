import styled from "styled-components";

interface IContainerProps{
  img: string
}

export const Container = styled.div<IContainerProps>`
  height: 100vh;
  padding: 2rem 0 2rem;
  background-image: url(${props => props.img});
  min-width: 254px;
`;

export const Content = styled.div`
  gap: 24px;
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  min-width: 254px;
  padding: 0 1.5rem;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1{
    font: normal 1rem ;
  }
  strong{
    font: bold 0.25rem ;
  }
`;