import { useLocation } from "react-router-dom";
import { Location } from "react-router-dom";
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
import ResumeBox from "./ResumeBox";

// interfaces
interface ProjectsProps {
  isDarkMode: boolean;
}

function Projects({ isDarkMode }: ProjectsProps) {
  const location = useLocation();

  return (
    <ContentContainer>
      <ProjectsContainer location={location}>
        {location.pathname !== "/works" ? (
          <>
            {" "}
            <ProjectsTitle>My Works</ProjectsTitle>
            <ProjectsTitleDescription>
              Some Of My Projects
            </ProjectsTitleDescription>
            <UnderlineContainer>
              <UnderlineCircle />
              <Underline />
            </UnderlineContainer>
          </>
        ) : null}
        {/* Aplication Container */}
        <ApplicationContainer>
          <ApplicationTitle>Web Applications</ApplicationTitle>
          {location.pathname == "/works" && (
            <UnderlineContainer>
              <UnderlineCircle />
              <Underline />
            </UnderlineContainer>
          )}
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
        <ResumeBoxContainer>
          <ResumeBox
            isDarkMode={isDarkMode}
            title="Want to know about my profession? See my resume 👉"
            resumeTitle="MY RESUME"
          />
        </ResumeBoxContainer>
      </ProjectsContainer>
    </ContentContainer>
  );
}

export default Projects;

const ProjectsContainer = styled.div<{ location: Location }>`
  padding: 20px;
  margin-top: ${(props) =>
    props.location.pathname == "/works" ? "0.5rem" : "3rem"};

  @media screen and (min-width: 750px) {
    padding: 0px;
    margin-top: ${(props) =>
      props.location.pathname == "/works" ? "4rem" : "9rem"};
    /* margin-top: 8rem; */
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

const ResumeBoxContainer = styled.div`
  margin-top: 2.5rem;

  @media screen and (min-width: 750px) {
    margin-top: 5.5rem;
  }
`;
