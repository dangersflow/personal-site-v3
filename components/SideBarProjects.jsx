import { useState } from "react";
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
  height: 50%;
  align-items: center;
  justify-content: center;

  media (min-width: 768px) {
    font-size: 2rem;
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

export default function SideBarProjects(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHoverEnter = () => {
    setIsHovering(true);
  };

  const handleHoverLeave = () => {
    setIsHovering(false);
  };

  const handleClickDown = () => {
    setIsClicked(true);
  };

  const handleClickUp = () => {
    setIsClicked(false);
  };

  return (
    <>
      <StyledSideBarItem
        onHoverStart={handleHoverEnter}
        onHoverEnd={handleHoverLeave}
        onMouseDown={handleClickDown}
        onMouseUp={handleClickUp}
      >
        <StyledCharacter
          animate={{
            x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-120%" : 0,
            y: isClicked ? (isHovering ? 40 : 0) : isHovering ? "60%" : 0,
            fontSize: isHovering ? (isClicked ? "3rem" : "4rem") : "3rem",
          }}
          style={{
            fontSize: "3rem",
            color: isHovering ? "black" : "white",
          }}
        >
          P
        </StyledCharacter>
        <StyledCharacter
          animate={{
            x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-80%" : 0,
            y: isClicked ? (isHovering ? 40 : 0) : isHovering ? "-30%" : 0,
            fontSize: isHovering ? (isClicked ? "3rem" : "2.5rem") : "3rem",
          }}
          style={{
            fontSize: "3rem",
            color: isHovering ? "black" : "white",
          }}
        >
          R
        </StyledCharacter>
        <StyledCharacter
          animate={{
            x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-30%" : 0,
            y: isClicked ? (isHovering ? 40 : 0) : isHovering ? "0%" : 0,
          }}
          style={{
            fontSize: "3rem",
            color: isHovering ? "black" : "white",
          }}
        >
          O
        </StyledCharacter>
        <StyledCharacter
          animate={{
            x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-30%" : 0,
            y: isClicked ? (isHovering ? 40 : 0) : isHovering ? "30%" : 0,
            fontSize: isHovering ? (isClicked ? "3rem" : "4rem") : "3rem",
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          style={{
            fontSize: "3rem",
            color: isHovering ? "black" : "white",
          }}
        >
          J
        </StyledCharacter>
        <StyledCharacter
          animate={{
            x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "40%" : 0,
            y: isClicked ? (isHovering ? 40 : 0) : isHovering ? "-30%" : 0,
            fontSize: isHovering ? (isClicked ? "3rem" : "3rem") : "3rem",
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          style={{
            fontSize: "3rem",
            color: isHovering ? "black" : "white",
          }}
        >
          E
        </StyledCharacter>
        <StyledCharacter
          animate={{
            x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "50%" : 0,
            y: isClicked ? (isHovering ? 40 : 0) : isHovering ? "30%" : 0,
            fontSize: isHovering ? (isClicked ? "3rem" : "3rem") : "3rem",
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          style={{
            fontSize: "3rem",
            color: isHovering ? "black" : "white",
          }}
        >
          C
        </StyledCharacter>
        <StyledCharacter
          animate={{
            x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "200%" : 0,
            y: isClicked ? (isHovering ? 40 : 0) : isHovering ? "-30%" : 0,
            fontSize: isHovering ? (isClicked ? "3rem" : "3rem") : "3rem",
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          style={{
            fontSize: "3rem",
            color: isHovering ? "black" : "white",
          }}
        >
          T
        </StyledCharacter>
        <StyledCharacter
          animate={{
            x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "200%" : 0,
            y: isClicked ? (isHovering ? 40 : 0) : isHovering ? "0%" : 0,
            fontSize: isHovering ? (isClicked ? "3rem" : "3rem") : "3rem",
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          style={{
            fontSize: "3rem",
            color: isHovering ? "black" : "white",
          }}
        >
          S
        </StyledCharacter>
      </StyledSideBarItem>
    </>
  );
}
