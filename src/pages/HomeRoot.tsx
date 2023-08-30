import { ReactNode } from "react"
import {
  Container,
  Content
} from "../components/Containers"

interface IHomeRootProps {
  children: ReactNode;
}

export function HomeRoot({ children }: IHomeRootProps) {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  )
}