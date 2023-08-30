import styled, { css } from "styled-components";
import ImagePath from '../../assets/background.svg';

export const Container = styled.div`
  height: 100vh;
  min-width: 500px;
  padding: 2rem 0 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${ImagePath});
`;

export const Content = styled.div`
  gap: 12px;
  height: auto;
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  min-width: 500px;
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