import { Button } from "./styles"

interface IButtonLinkProps {
  nameButton: string;
  urlButton: string;
};

export function ButtonLink({ nameButton, urlButton }: IButtonLinkProps) {
  return (
    <Button
      href={urlButton}
      target="_blank"
    >
      {nameButton}
    </Button>
  );
};