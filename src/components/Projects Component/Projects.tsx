import styled from "styled-components";

// import styled components
import { ContentContainer } from "../../App";
import {
  Underline,
  UnderlineCircle,
  UnderlineContainer,
} from "../Service Component/Service";

// import assets
import app1 from "../../assets/app1.jpg";
import app2 from "../../assets/app3.avif";

// interfaces
interface ProjectsProps {
  isDarkMode: boolean;
}

function Projects({ isDarkMode }: ProjectsProps) {
  return (
    <ContentContainer>
      <ProjectsContainer>
        <ProjectsTitle>My Works</ProjectsTitle>
        <ProjectsTitleDescription>Some Of My Projects</ProjectsTitleDescription>
        <UnderlineContainer>
          <UnderlineCircle />
          <Underline />
        </UnderlineContainer>
        {/* Aplication Container */}
        <ApplicationContainer>
          <ApplicationTitle>Web Applications</ApplicationTitle>
          <ApplicationCardWrapper>
            <ApplicationCard>
              <ApplicationImage src={app1} alt="appImage" />
            </ApplicationCard>
            <ApplicationCard>
              <ApplicationImage src={app2} alt="appImage" />
            </ApplicationCard>
          </ApplicationCardWrapper>
        </ApplicationContainer>
        {/*  */}
        <MyResumeBox isDarkMode={isDarkMode}>
          <MyResumeTitle>
            Want to know about my profession? See my resume 👉
          </MyResumeTitle>
          {/*  */}
          <ResumeNavigateBox>
            <ResumeTitle isDarkMode={isDarkMode}>MY RESUME</ResumeTitle>
          </ResumeNavigateBox>
        </MyResumeBox>
      </ProjectsContainer>
    </ContentContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div`
  padding: 20px;
  margin-top: 3rem;

  @media screen and (min-width: 750px) {
    padding: 0px;
    margin-top: 8rem;
  }
`;

const ProjectsTitle = styled.h1`
  font-size: 30px;
  color: var(--primary-color);
  font-weight: 700;
  @media screen and (min-width: 750px) {
    font-size: 36px;
  }
`;

const ProjectsTitleDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 18px;
  color: var(--primary-color);
`;

// Application container styles

const ApplicationContainer = styled.div`
  margin-top: 1.5rem;
`;

const ApplicationCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
  }
`;

const ApplicationTitle = styled.h3`
  font-size: 24px;
  color: var(--primary-color);
  font-weight: 700;
`;

const ApplicationImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

const ApplicationCard = styled.div`
  position: relative;
  max-width: 464px;
  width: 100%;
  margin-top: 2rem;
  cursor: pointer;
  box-shadow: 0 0.332071px 2.21381px rgb(0 0 0 / 1%),
    0 0.798012px 5.32008px rgb(0 0 0 / 3%),
    0 1.50259px 10.0172px rgb(0 0 0 / 4%), 0 2.68036px 17.869px rgb(0 0 0 / 5%),
    0 5.01331px 33.4221px rgb(0 0 0 / 6%), 0 12px 80px rgb(0 0 0 / 9%);
  border-radius: 0.5rem;
`;

//

const MyResumeBox = styled.div<ProjectsProps>`
  max-width: 576px;
  width: 100%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--dark-mode)" : "#ffffff"};
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  margin-top: 2.5rem;
  @media screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-top: 5.5rem;
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

  @media screen and (min-width: 750px) {
    margin-top: 0px;
    margin-left: 15px;
  }
`;

const ResumeTitle = styled.h1<ProjectsProps>`
  position: absolute;
  left: 22px;
  width: 150px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => (props.isDarkMode ? "#3b3737" : "black")};
`;
