import React from "react";

// import styled components
import AnimatedPage from "../../components/AnimatedPage";

// import components
import { Footer, Landing, Projects, Service } from "../../components";

// interfaces
interface LandingPageProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function LandingPage({ isDarkMode, setIsDarkMode }: LandingPageProps) {
  return (
    <AnimatedPage>
      <Landing />
      <Service isDarkMode={isDarkMode} />
      {/* <Resume isDarkMode={isDarkMode} /> */}
      <Projects isDarkMode={isDarkMode} />
      <Footer />
    </AnimatedPage>
  );
}

export default LandingPage;
