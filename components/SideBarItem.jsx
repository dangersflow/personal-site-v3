import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledSideBarItem = styled(motion.button)`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 12%;
  cursor: pointer;
  font-family: "Asher", sans-serif;
  border: none;

  :hover {
    background-color: #fcec0c;
  }

  media (min-width: 768px) {
  }
  media (min-width: 1024px) {
  }
  media (min-width: 1280px) {
  }
  media (min-width: 1600px) {
  }
  media (min-width: 1920px) {
  }
  media (min-width: 2560px) {
  }
`;

const StyledText = styled(motion.div)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  transition: all 0.1s ease-in-out;

  ${StyledSideBarItem}:hover & {
    color: black;
  }

  media (min-width: 768px) {
  }
  media (min-width: 1024px) {
  }
  media (min-width: 1280px) {
  }
  media (min-width: 1600px) {
  }
  media (min-width: 1920px) {
  }
  media (min-width: 2560px) {
  }
`;

const StyledVerticalDivider = styled(motion.div)`
  display: flex;
  position: relative;
  border-left: 1px solid #d1c5c0;
  height: 15px;
  transform: rotate(45deg);
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transition: all 0.2s ease-in-out;

  ${StyledSideBarItem}:hover & {
    border-left: 1px solid black;
    height: 45px;
  }
`;

const StyledCharacter = styled(motion.span)`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 3rem;
  transition: all 0.2s ease-in-out;
  height: 100%;
  align-items: center;
  justify-content: center;

  ${StyledSideBarItem}:hover & {
    color: black;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export default function SideBarItem(props) {
  let alternate = false;
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
  return (
    <>
      <StyledSideBarItem>
        {/* <StyledText>{props.text}</StyledText> */}
        {props.text.split("").map((character, index) => {
          alternate = !alternate;
          return <StyledCharacter key={index}>{character}</StyledCharacter>;
        })}
      </StyledSideBarItem>
    </>
  );
}
