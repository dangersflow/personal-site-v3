import react from "react";
import { Col, Row } from "@nextui-org/react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SideBarItem from "./SideBarItem";
import SideBarDivider from "./SideBarDivider";
import SideBarHome from "./SideBarHome";
import SideBarAbout from "./SideBarAbout";
import SideBarProjects from "./SideBarProjects";
import SideBarContact from "./SideBarContact";

const StyledSideBar = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 20vw;
  border-right: 2px solid #000000;

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

export default function SideBar() {
  return (
    <StyledSideBar>
      <SideBarHome />
      <SideBarDivider />
      <SideBarAbout />
      <SideBarDivider />
      <SideBarProjects />
      <SideBarDivider />
      <SideBarContact />
    </StyledSideBar>
  );
}
