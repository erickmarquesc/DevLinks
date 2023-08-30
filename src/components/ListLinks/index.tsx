import { LinkList } from "../../utils/linkList"
import { ButtonLink } from "../Buttons"

export function ListLinks() {
  return (
    <>
      {LinkList.map((link) => (
        <ButtonLink key={link.id}
          nameButton={link.name}
          urlButton={link.url}
        />
      )
      )}
    </>
  )
}