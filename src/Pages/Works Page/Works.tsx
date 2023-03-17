import { ContentContainer } from "../../App";

// import components
import { AnimatedPage, Projects } from "../../components";

interface WorksProps {
  isDarkMode: boolean;
}

function Works({ isDarkMode }: WorksProps) {
  return (
    <AnimatedPage>
      <ContentContainer>
        <Projects isDarkMode={isDarkMode} />
      </ContentContainer>
    </AnimatedPage>
  );
}

export default Works;
