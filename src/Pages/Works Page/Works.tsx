import { ContentContainer } from "../../App";
import Projects from "../../components/Projects Component/Projects";

interface WorksProps {
  isDarkMode: boolean;
}

function Works({ isDarkMode }: WorksProps) {
  return (
    <ContentContainer>
      <Projects isDarkMode={isDarkMode} />
    </ContentContainer>
  );
}

export default Works;
