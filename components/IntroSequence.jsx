import react, { useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const IntroSequenceStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 1;

  @font-face {
    font-family: "Asher";
    src: url("./asher.ttf");
  }
`;

export default function IntroSequence(props) {
  return (
    <IntroSequenceStyled
      animate={{
        opacity: 0,
      }}
      transition={{
        duration: 3,
        delay: 3,
        type: "spring",
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        props.setShow(false);
      }}
    >
      <motion.div
        animate={{
          translateX: "-30%",
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          ease: "circInOut",
        }}
      >
        <motion.div
          style={{ color: "white", fontSize: "0vw", fontFamily: "Asher" }}
          animate={{
            fontSize: "5vw",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "circInOut",
          }}
        >
          Francisco
        </motion.div>
      </motion.div>
      <motion.div
        animate={{
          translateX: "30%",
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          ease: "circInOut",
        }}
      >
        <motion.div
          style={{ color: "white", fontSize: "0vw", fontFamily: "Asher" }}
          animate={{
            fontSize: "5vw",
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "circInOut",
          }}
        >
          Gonzalez
        </motion.div>
      </motion.div>
    </IntroSequenceStyled>
  );
}
