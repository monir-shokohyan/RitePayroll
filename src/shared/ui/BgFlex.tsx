import { Flex, FlexProps } from "@mantine/core";
import styled from "styled-components";

interface BgFlexProps extends FlexProps {
  bg?: string;
}

export const BgFlex = styled(Flex)<BgFlexProps>`
  background-image: ${({ bg }) => (bg ? `url(${bg})` : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;