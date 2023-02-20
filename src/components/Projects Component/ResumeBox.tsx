import React from "react";
import styled from "styled-components";

interface ResumeBoxProps {
  isDarkMode: boolean;
  title?: string;
  resumeTitle?: string;
}

function ResumeBox({ isDarkMode, title, resumeTitle }: ResumeBoxProps) {
  return (
    <MyResumeBox isDarkMode={isDarkMode}>
      <MyResumeTitle>{title}</MyResumeTitle>
      {/*  */}
      <ResumeNavigateBox>
        <ResumeTitle isDarkMode={isDarkMode}>{resumeTitle}</ResumeTitle>
      </ResumeNavigateBox>
    </MyResumeBox>
  );
}

export default ResumeBox;

const MyResumeBox = styled.div<ResumeBoxProps>`
  max-width: 576px;
  width: 100%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--dark-mode)" : "#ffffff"};
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  @media screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    height: 160px;
  }
`;

const MyResumeTitle = styled.h4`
  font-size: 18px;
  color: var(--primary-color);
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 750px) {
    width: 276px;
  }
`;

const ResumeTitle = styled.h1<ResumeBoxProps>`
  position: absolute;
  left: 22px;
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => (props.isDarkMode ? "#3b3737" : "black")};
`;

const ResumeNavigateBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e67b71;
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  cursor: pointer;
  transition-duration: 0.2s;

  @media screen and (min-width: 750px) {
    margin-top: 0px;
    margin-left: 15px;
  }

  &:hover {
    cursor: pointer;
    border-radius: 17px;
    width: 162.5px;

    & ${ResumeTitle} {
      color: #ffffff;
    }
  }
`;
