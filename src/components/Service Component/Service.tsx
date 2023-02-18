import styled from "styled-components";

// import styled Components
import { ContentContainer } from "../../App";

// import assets
import programmer from "../../assets/programmer.png";
import programming from "../../assets/programming.svg";

function Service() {
  return (
    <ContentContainer>
      <ServiceContainer>
        <ServiceTitle>What I Can Do</ServiceTitle>
        <ServiceDescription>Service Offers</ServiceDescription>
        <UnderlineContainer>
          <UnderlineCircle />
          <Underline />
        </UnderlineContainer>
        {/* Skills Container */}
        <SkillsContainer>
          <SkillsLeftSide>
            {/*  */}
            <SkillsBoxContainer>
              <SkillsBox>
                <SkillsTitle>FRONTEND APPS</SkillsTitle>
                <SkillsDescription>
                  Build client-side applications with modern features like SPA
                  and maintain semantic coding style among other best practices
                  for SEO optimisation. Use modern tech such as Nuxt (Vue.js),
                  TailwindCSS, and GSAP.
                </SkillsDescription>
              </SkillsBox>

              <SkillsBox>
                <SkillsTitle>BACKEND APPS</SkillsTitle>
                <SkillsDescription>
                  Build scalable and maintainable server applications using
                  cutting-edge technologies such as Nest.js, Docker, and MongoDB
                </SkillsDescription>
              </SkillsBox>

              <SkillsBox>
                <SkillsTitle>NATIVE APPS</SkillsTitle>
                <SkillsDescription>
                  Use Flutter for building simple native mobile applications.
                  Flutter is modern, fast, cross-platform, and popular.
                </SkillsDescription>
              </SkillsBox>
            </SkillsBoxContainer>
            {/*  */}
            <MyWorksBox>
              <MyWorksTitle>SEE MY WORKS</MyWorksTitle>
            </MyWorksBox>
          </SkillsLeftSide>
          {/* ------ right side */}
          <SkillsRightSide>
            <SkillsProgrammerImage src={programming} alt="programmerImage" />
          </SkillsRightSide>
        </SkillsContainer>
      </ServiceContainer>
    </ContentContainer>
  );
}

export default Service;

const ServiceContainer = styled.div`
  padding: 20px;
  margin-top: 40px;

  @media screen and (min-width: 750px) {
    padding: 0px;
    margin-top: 140px;
  }
`;

const ServiceTitle = styled.h1`
  font-size: 30px;
  color: var(--primary-color);
  font-weight: 700;
`;

const ServiceDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 18px;
  color: var(--primary-color);
`;

// Underline styles

const UnderlineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const UnderlineCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--secondary-color);
`;

const Underline = styled.div`
  width: 128px;
  height: 3.19px;
  background-color: var(--secondary-color);
`;

// Skills Container

const SkillsContainer = styled.div`
  max-width: 960px;
  width: 100%;
  background-color: var(--light-color);
  border-radius: 0.5rem;
  padding: 1.25rem;
  margin-top: 2.5rem;

  @media screen and (min-width: 750px) {
    padding: 1.5rem;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, auto);
  }
`;

// Skills LeftSide styles

const SkillsLeftSide = styled.div`
  @media screen and (min-width: 750px) {
    max-width: 400px;
    width: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

const SkillsBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 750px) {
    gap: 35px;
  }
`;

const SkillsBox = styled.div``;

const SkillsTitle = styled.h1`
  font-size: 18px;
  text-align: center;
  color: var(--primary-color);
  font-weight: 700;
`;
const SkillsDescription = styled.div`
  margin-top: 0.75rem;
  font-size: 16px;
  color: var(--primary-color);
  line-height: 1.5;
  text-align: center;

  @media screen and (min-width: 750px) {
    margin-top: 1rem;
    font-size: 16.3px;
  }
`;

// Skills RightSide Styles

const SkillsRightSide = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const SkillsProgrammerImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

// SeeMyWorks styles

const MyWorksTitle = styled.p`
  position: absolute;
  left: 7px;
  width: 200px;
  font-size: 20px;
  font-weight: 700;
`;

const MyWorksBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e67b71;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in;
  margin-top: 2rem;
  margin-left: 3rem;

  &:hover {
    cursor: pointer;
    border-radius: 17px;
    width: 170px;

    & ${MyWorksTitle} {
      color: #ffffff;
    }
  }

  @media screen and (min-width: 750px) {
    margin-left: 5.5rem;
  }
`;
