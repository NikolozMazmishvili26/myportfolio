import styled from "styled-components";

// import component
import { ResumeBox } from "../Shared";

function ResumeBtnContainer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <BtnContainer>
      <DownloadResumeBtn>Download My Resume</DownloadResumeBtn>
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
