import styled from "styled-components";

// import styled components
import { ContentContainer } from "../../App";

// import component
import { AnimatedPage } from "../../components";

// import component
import {
  ResumeContent,
  ContactContent,
  ResumeBtnContainer,
} from "../../components";

function ResumePage({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <AnimatedPage>
      <ContentContainer>
        <ResumeContainer>
          {/*  */}
          <ResumeContent
            title="About Me"
            description="I am a front-end developer with experience building web
              applications using HTML, CSS, and JavaScript. I have a strong
              foundation in these core technologies, and have used them to
              create responsive, user-friendly interfaces. I have also gained
              expertise in ReactJS, a popular JavaScript library for building
              web applications, and have used it to build scalable, maintainable
              projects. In addition to my technical skills, I am constantly
              seeking to improve myself and acquire new skills. I am currently
              working on learning TypeScript, and am eager to put my skills to
              use in a professional setting. I am hardworking and dedicated, and
              am always striving to improve my craft."
          />
          <ResumeContent
            title="Education"
            description="As a fourth-year IT student at the University of Business and
            Technology, I have developed a keen interest in front-end
            development. My education has equipped me with a diverse skillset
            and expertise in various facets of the IT industry. However,
            front-end development has captured my attention, and I aspire to
            pursue a career in this field. I am confident in my ability to
            excel with my passion and knowledge."
          />
          {/* Contact Content Component */}
          <ContactContent />
          {/* Resume Btn Component */}
          <ResumeBtnContainer isDarkMode={isDarkMode} />
          {/*  */}
        </ResumeContainer>
      </ContentContainer>
    </AnimatedPage>
  );
}

export default ResumePage;

const ResumeContainer = styled.div`
  margin-top: 1.5rem;
  padding: 0.5rem;

  @media screen and (min-width: 750px) {
    margin-top: 3.5rem;
    padding: 0px;
  }
`;
