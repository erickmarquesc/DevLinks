import { Button } from "./styles";

interface IButtonLinkProps {
  nameButton: string;
  urlButton: string;
};

export function ButtonLink({ nameButton, urlButton }: IButtonLinkProps) {
  return (
    <a
      href={urlButton}
      target="_blank"
    >
      <Button>
        {nameButton}
      </Button>
    </a>
  );
};