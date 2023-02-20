import styled from "styled-components";

// import styled components
import { ContentContainer } from "../../App";
import {
  Underline,
  UnderlineCircle,
  UnderlineContainer,
} from "../../components/Service Component/Service";

// import icons

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import ResumeBox from "../../components/Projects Component/ResumeBox";

interface ResumePageProps {
  isDarkMode: boolean;
}

function ResumePage({ isDarkMode }: ResumePageProps) {
  return (
    <ContentContainer>
      <ResumeContainer>
        {/*  */}
        <ResumeContent>
          <ResumeTitle>About Me</ResumeTitle>
          <UnderlineContainer>
            <UnderlineCircle />
            <Underline />
          </UnderlineContainer>
          <ResumeDescription>
            I am a front-end developer with experience building web applications
            using HTML, CSS, and JavaScript. I have a strong foundation in these
            core technologies, and have used them to create responsive,
            user-friendly interfaces. I have also gained expertise in ReactJS, a
            popular JavaScript library for building web applications, and have
            used it to build scalable, maintainable projects. In addition to my
            technical skills, I am constantly seeking to improve myself and
            acquire new skills. I am currently working on learning TypeScript,
            and am eager to put my skills to use in a professional setting. I am
            hardworking and dedicated, and am always striving to improve my
            craft.
          </ResumeDescription>
        </ResumeContent>
        {/*  */}
        <ResumeContent>
          <ResumeTitle>Education</ResumeTitle>
          <UnderlineContainer>
            <UnderlineCircle />
            <Underline />
          </UnderlineContainer>
          <ResumeDescription>
            I am currently a fourth-year student studying at the University of
            Business and Technology in the Faculty of Information Technology. I
            am currently working on learning TypeScript, and am eager to put my
            skills to use in a professional setting. I am hardworking and
            dedicated, and am always striving to improve my craft.
          </ResumeDescription>
        </ResumeContent>
        {/*  */}
        <ResumeContent>
          <ResumeTitle>Contact</ResumeTitle>
          <UnderlineContainer>
            <UnderlineCircle />
            <Underline />
          </UnderlineContainer>
          <ResumeDescription>
            {/*  */}
            <ResumeList>
              <ResumeItem>
                <FaUser size={19} />
                <ResumeItemResult>Nikoloz Mazmishvili</ResumeItemResult>
              </ResumeItem>

              <ResumeItem>
                <MdEmail size={19} />
                <ResumeItemResult>nick.mazmishvili@gmail.com</ResumeItemResult>
              </ResumeItem>

              <ResumeItem>
                <BsTelephoneFill size={18} />
                <ResumeItemResult>+995 593-20-99-77</ResumeItemResult>
              </ResumeItem>
            </ResumeList>
            {/*  */}
          </ResumeDescription>
        </ResumeContent>
        {/* Download Resume Btn */}
        <ResumeBtnContainer>
          <DownloadResumeBtn>Download My Resume</DownloadResumeBtn>
          <ResumeBox
            isDarkMode={isDarkMode}
            title="Want to know about my Works In Development Process? 👉"
            resumeTitle="MY WORKS"
          />
        </ResumeBtnContainer>
      </ResumeContainer>
    </ContentContainer>
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

const ResumeTitle = styled.h1`
  font-size: 24px;
  color: var(--primary-color);
  font-weight: 700;
`;

const ResumeDescription = styled.p`
  font-size: 14px;
  color: var(--primary-color);
  line-height: 1.5;
  margin-top: 2rem;

  @media screen and (min-width: 750px) {
    font-size: 15px;
  }
`;

const ResumeContent = styled.div`
  margin-top: 2.5rem;
`;

const ResumeList = styled.ul``;

const ResumeItem = styled.li`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 17px;
  height: 20px;
`;

const ResumeItemResult = styled.p`
  font-size: 15px;
  font-style: oblique;
`;

const ResumeBtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 750px) {
    margin-top: 3rem;
    gap: 0px;
    margin-bottom: 2.5rem;
  }
`;

const DownloadResumeBtn = styled.button`
  max-width: 192px;
  width: 100%;
  height: 40px;
  background-color: #607393;
  border: none;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
