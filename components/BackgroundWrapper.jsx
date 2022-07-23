import react from "react";
import styled from "styled-components";
import bg from "../public/background-final.png";

const StyledBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bg.src});
  background-size: "contain";
  background-repeat: "repeat";
`;

export default function BackgroundWrapper(props) {
  return <StyledBackgroundWrapper>{props.children}</StyledBackgroundWrapper>;
}
