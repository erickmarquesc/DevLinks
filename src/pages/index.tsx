import { ButtonContainer } from "../components/Buttons/styles";
import { ButtonLink } from "../components/Buttons";
import { LinkList } from "../components/LinksList";
import ImagePath from '../assets/background.svg';
import { Avatar } from "../components/Avatar";
import { Container, Content } from "./styles";

export function Home() {
  return (
    <Container img={ImagePath}>
      <Content>
        <Avatar />

        <h1>ErickMarques</h1>

        <ButtonContainer>
          {LinkList.map((link) => {
            return (
              <ButtonLink key={link.id}
                nameButton={link.name}
                urlButton={link.url}
              />
            )
          })}
        </ButtonContainer>

        <strong>
          Feito com muito ❤️ por Erick Marques <br />
          Desenvolvedor Front-end UI Designer
        </strong>
      </Content>
    </Container>
  );
};