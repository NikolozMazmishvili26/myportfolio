import React from "react";

// import styled components
import { Container } from "../../App";

// import components
import Footer from "../../components/Footer Component/Footer";
import Header from "../../components/Header Component/Header";
import Landing from "../../components/Landing Component/Landing";
import Projects from "../../components/Projects Component/Projects";
import Resume from "../../components/Resume Component/Resume";
import Service from "../../components/Service Component/Service";

// interfaces
interface LandingPageProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function LandingPage({ isDarkMode, setIsDarkMode }: LandingPageProps) {
  return (
    <Container isDarkMode={isDarkMode}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Landing />
      <Service isDarkMode={isDarkMode} />
      <Resume isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Footer />
    </Container>
  );
}

export default LandingPage;
