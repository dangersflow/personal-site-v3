import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Col, Row } from "@nextui-org/react";

const StyledContentColumn = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: 100%;
    padding: 5rem;
    z-index: 1;

    @font-face {
        font-family: "RNSReg";
        src: url("./RNSMiles-Regular.ttf");
      }
      @font-face {
        font-family: "RNSLight";
        src: url("./RNSMiles-Thin.ttf");
      }
}`;

const StyledHeader = styled(motion.div)`
    font-size: 5rem;
    font-family: "RNSReg", sans-serif;
    color: white;
}`;

const StyledBody = styled(motion.div)`
    font-size: 2rem;
    font-family: "RNSLight", sans-serif;
    color: white;
}`;

const StyledBodyLeft = styled(motion.div)`
    font-size: 2rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    margin-right: 50%;
    padding: 4rem
}`;

const StyledBodyRight = styled(motion.div)`
    font-size: 2rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    margin-left: 50%;
    padding: 4rem
}`;

export default function HomeContent() {
  return (
    <StyledContentColumn>
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        FRANCISCO GONZALEZ
      </StyledHeader>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyLeft>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyLeft>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyLeft>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
        nisi eu consectetur consectetur, nisl nisl consectetur nisl, euismod
        consectetur nisl nisl euismod nisl. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nullam euismod, nisi eu consectetur
        consectetur, nisl nisl consectetur nisl, euismod consectetur nisl nisl
        euismod nisl.
      </StyledBodyLeft>
    </StyledContentColumn>
  );
}
