import styled from "styled-components";

// import styled components
import { ContentContainer } from "../../App";

// import assets
import letsTalkImage from "../../assets/talk.png";
import avatarImage from "../../assets/avatar.svg";

function Landing() {
  return (
    <>
      <ContentContainer>
        <LandingContainer>
          <LandingLeftSide>
            <LandingWelcomeBox>It's Me</LandingWelcomeBox>
            <LandingTitle>Nikoloz Mazmishvili</LandingTitle>
            <LandingDescription>
              Learning front-end development for 6 months with ReactJS for
              building functional and visually appealing apps. Always improving
              skills and excited for future projects with latest front-end tech.
            </LandingDescription>
            <LetsTalkParentContainer>
              <LetsTalkImage src={letsTalkImage} alt="talkImage" />
            </LetsTalkParentContainer>
          </LandingLeftSide>
          <LandingRightSide>
            <AvatarImage src={avatarImage} alt="avatarImage" />
          </LandingRightSide>
        </LandingContainer>
      </ContentContainer>
    </>
  );
}

export default Landing;

const LandingContainer = styled.div`
  margin-top: 2.5rem;
  padding: 20px;
  @media screen and (min-width: 750px) {
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(2, auto);
    padding: 0px;
    margin-top: 5rem;
  }
`;

// landing left side styles

const LandingLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 750px) {
    max-width: 360px;
    width: 100%;
    align-items: flex-start;
  }
`;

const LandingWelcomeBox = styled.div`
  position: relative;
  background-color: #2b2929;
  width: 80px;
  height: 50px;
  color: #f2f0ee;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border: 0.8em solid transparent;
    position: absolute;
    right: 7px;
    bottom: -20px;
    border-top: 10px solid #2b2929;
  }

  @media screen and (min-width: 750px) {
    margin-left: 25px;
  }
`;

const LandingTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  color: var(--primary-color);
  line-height: 1;
  font-weight: 700;
  margin-top: 25px;
  word-wrap: break-word;
  width: 100%;

  @media screen and (min-width: 750px) {
    text-align: start;
    width: 100%;
  }
`;

const LandingDescription = styled.p`
  text-align: center;
  color: var(--primary-color);
  margin-top: 2.5rem;
  line-height: 1.5;
  font-size: 14px;

  @media screen and (min-width: 750px) {
    text-align: start;
    width: 100%;
    font-size: 15px;
  }
`;

const LetsTalkImage = styled.img`
  width: 70%;
  height: 70%;
  transition-duration: 0.2s;
`;

const LetsTalkParentContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e67b71;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.8rem;
  margin-right: auto;
  cursor: pointer;

  @media screen and (min-width: 750px) {
    margin: 1.8rem auto;
  }

  &:hover {
    & ${LetsTalkImage} {
      width: 100%;
      height: 100%;
    }
  }
`;

// landing right side styles
const LandingRightSide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;

  @media screen and (min-width: 750px) {
    margin-top: 0rem;
  }
`;

const AvatarImage = styled.img`
  width: 160px;
  object-fit: cover;
  cursor: pointer;

  @media screen and (min-width: 750px) {
    width: 320px;
  }
`;
