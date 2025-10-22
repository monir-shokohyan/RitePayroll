import { Button, ButtonProps } from "@mantine/core"
import { SavedColors } from "@shared/constants"
import { TextWithFamily } from "@shared/ui/Typography"
import styled from "styled-components"

const WelcomeText = styled(TextWithFamily)`
font-size: 1.3rem;
@media (max-width:1000px){
    font-size: 1rem;
}

`
const WelcomeTitle = styled(TextWithFamily)`
font-size: 3.2rem;
@media (max-width:1000px){
    font-size: 1.5rem;
}

`
const HoveredButtonWithBorder = styled(Button)<ButtonProps>`
&:hover{
  border: 1px solid ${SavedColors.Primaryblue};
  color: ${SavedColors.Primaryblue};
  background-color: transparent;
  transition: all 0.3s ease-in;
}
`
const HoveredButtonWithoutBorder = styled(Button)<ButtonProps>`
&:hover{
  color: ${SavedColors.Primaryblue};
  opacity: 60%;
  background-color: transparent;
  transition: all 0.3s ease-in;
}
`

export {
    HoveredButtonWithBorder,
    HoveredButtonWithoutBorder,
    WelcomeText,
    WelcomeTitle
}