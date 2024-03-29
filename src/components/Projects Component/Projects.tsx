import { useState } from "react";
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
import app1 from "../../assets/eCommerce.png";
import app2 from "../../assets/todo.jpg";
import app3 from "../../assets/page.jpg";
import app4 from "../../assets/project4.jpg";
import ResumeBox from "../Shared/ResumeBox";

// import component
import AppCard from "./AppCard";

// interfaces
interface ProjectsProps {
  isDarkMode: boolean;
}

function Projects({ isDarkMode }: ProjectsProps) {
  //
  const [isProjectsDetailActive, setIsProjectsDetailActive] = useState(false);

  const location = useLocation();

  return (
    <>
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
              {/* import appCard Component */}
              <AppCard
                image={app1}
                imageAlt="eCommerce"
                liveServerLink="https://musicshoponline.netlify.app/"
                gitHubLink="https://github.com/NikolozMazmishvili26/eCommerce"
              />
              <AppCard
                image={app2}
                imageAlt="todoApp"
                liveServerLink="https://ytodoapp.netlify.app/"
                gitHubLink="https://github.com/NikolozMazmishvili26/todoapp"
              />
              <AppCard
                image={app3}
                imageAlt="todoApp"
                liveServerLink="https://productonepage.netlify.app/"
                gitHubLink="https://github.com/NikolozMazmishvili26/product-page-project"
              />
              <AppCard
                image={app4}
                imageAlt="todoApp"
                liveServerLink="https://entertainmentapp2023.netlify.app/"
                gitHubLink="https://github.com/NikolozMazmishvili26/entertainment-web-app"
              />
              {/* import appCard Component */}
            </ApplicationCardWrapper>
          </ApplicationContainer>
          {/*  */}
          <ResumeBoxContainer>
            <ResumeBox
              isDarkMode={isDarkMode}
              title="Want to know about my profession? See my resume 👉"
              resumeTitle="MY RESUME"
              navigateTo="/resume"
            />
          </ResumeBoxContainer>
        </ProjectsContainer>
      </ContentContainer>
    </>
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

//

const ResumeBoxContainer = styled.div`
  margin-top: 2.5rem;

  @media screen and (min-width: 750px) {
    margin-top: 5.5rem;
  }
`;
