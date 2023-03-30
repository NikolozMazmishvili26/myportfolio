import styled from "styled-components";
import { motion } from "framer-motion";

// import component
import { ResumeBox } from "../Shared";

// import asset
import resume from "../../assets/resume.pdf";

function ResumeBtnContainer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <BtnContainer>
      <Download href={resume} download>
        <DownloadResumeBtn>Download My Resume</DownloadResumeBtn>
      </Download>
      <ResumeBox
        isDarkMode={isDarkMode}
        title="Want to know about my Works In Development Process? 👉"
        resumeTitle="MY WORKS"
        navigateTo="/works"
      />
    </BtnContainer>
  );
}

export default ResumeBtnContainer;

const BtnContainer = styled.div`
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

const Download = styled.a``;

const DownloadResumeBtn = styled.button`
  font-family: "Roboto", sans-serif;
  width: 185px;
  /* width: 100%; */
  height: 45px;
  background-color: #607393;
  border: none;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  border-radius: 7px;
  transition-duration: 0.2s;

  &:hover {
    background-color: #4a576d;
  }
`;
