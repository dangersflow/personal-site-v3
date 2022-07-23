import react from "react";
import IntroSequence from "../components/IntroSequence";
import { Col, Row } from "@nextui-org/react";
import SideBar from "../components/SideBar";
import HomeContent from "../components/HomeContent";
import BackgroundWrapper from "../components/BackgroundWrapper";

export default function Home() {
  const [showIntro, setShowIntro] = react.useState(true);

  const handleChange = (status) => {
    setShowIntro(status);
  };

  return (
    <>
      {showIntro ? (
        <Col
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
          }}
        >
          <IntroSequence setShow={handleChange} />
        </Col>
      ) : (
        <Row>
          <SideBar />
          <BackgroundWrapper>
            <HomeContent />
          </BackgroundWrapper>
        </Row>
      )}
    </>
  );
}
