import { useState } from "react";
import styled from "styled-components";

// import styled Components
import { ContentContainer } from "../../App";

// import assets
import programming from "../../assets/programming.svg";
import ServiceSkillsBox from "./ServiceSkillsBox";

// import data
import { SkillsBoxData } from "./SkillsBoxData";

// interfaces
interface ServiceProps {
  isDarkMode: boolean;
}

export interface SkillsBoxDataProps {
  id: number;
  title: string;
  description: string;
}

function Service({ isDarkMode }: ServiceProps) {
  const [skillsBoxData, setSkillsBoxData] =
    useState<SkillsBoxDataProps[]>(SkillsBoxData);

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
        <SkillsContainer isDarkMode={isDarkMode}>
          {/* Skills Left Side */}
          <SkillsLeftSide>
            {/*  */}
            <SkillsBoxContainer>
              {skillsBoxData.map((item: SkillsBoxDataProps) => {
                return <ServiceSkillsBox key={item.id} item={item} />;
              })}
            </SkillsBoxContainer>
            {/*  */}
            <MyWorksBox>
              <MyWorksTitle>SEE MY WORKS</MyWorksTitle>
            </MyWorksBox>
          </SkillsLeftSide>
          {/* END skills Left Side */}

          {/* ------ right side */}
          <SkillsRightSide>
            <SkillsProgrammerImage src={programming} alt="programmerImage" />
          </SkillsRightSide>
          {/* END Skills Right Side */}
        </SkillsContainer>
        {/* END Skills Container */}
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

export const UnderlineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const UnderlineCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--secondary-color);
`;

export const Underline = styled.div`
  width: 128px;
  height: 3.19px;
  background-color: var(--secondary-color);
`;

// Skills Container

const SkillsContainer = styled.div<ServiceProps>`
  max-width: 960px;
  width: 100%;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--dark-mode)" : "var(--light-color)"};
  border: ${(props) => props.isDarkMode && "1px solid #e2e8f0"};
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
  word-wrap: break-word;
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

  &:hover {
    cursor: pointer;
    border-radius: 17px;
    width: 170px;

    & ${MyWorksTitle} {
      color: #ffffff;
    }
  }
`;
