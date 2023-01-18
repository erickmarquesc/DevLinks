import { Avatar } from "../components/Avatar";
import { Container, Content } from "./styles";
import ImagePath from '../assets/background.svg'

export function Home() {
  return (
    <Container img={ImagePath}>
      <Content>
        <Avatar/>
        <h1>ErickMarques</h1>
      </Content>

    </Container>
  );
};