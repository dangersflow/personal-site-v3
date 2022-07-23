import react from "react";
import IntroSequence from "./IntroSequence";
import { Col, Row } from "@nextui-org/react";
import SideBar from "../components/SideBar";

export default function Home() {
  const [showIntro, setShowIntro] = react.useState(true);

  return (
    <Row>
      <SideBar />
    </Row>
  );
}
