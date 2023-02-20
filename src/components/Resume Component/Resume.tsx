import { useState } from "react";
import styled from "styled-components";
// import styled components
import { ContentContainer } from "../../App";

// import assets
import programmer from "../../assets/person.png";

interface ResumeProps {
  isDarkMode: boolean;
}

function Resume({ isDarkMode }: ResumeProps) {
  const description =
    "I am a front-end developer with experience building web applications using HTML, CSS, and JavaScript. I have a strong foundation in these core technologies, and have used them to create responsive, user-friendly interfaces. I have also gained expertise in ReactJS, a popular JavaScript library for building web applications, and have used it to build scalable, maintainable projects. In addition to my technical skills, I am constantly seeking to improve myself and acquire new skills. I am currently working on learning TypeScript, and am eager to put my skills to use in a professional setting. I am hardworking and dedicated, and am always striving to improve my craft.";

  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <ContentContainer>
      <ResumeContainer>
        <ResumeBox isDarkMode={isDarkMode}>
          {/* Resume Content */}
          <ResumeContent>
            <ResumeImage src={programmer} alt="programmerImage" />
            {/* Resume Section */}
            <ResumeSection>
              <ResumeContentTitle>ABOUT ME</ResumeContentTitle>
              <ResumeUnderlineContainer>
                <ResumeUnderlineCircle></ResumeUnderlineCircle>
                <ResumeCircleLine></ResumeCircleLine>
              </ResumeUnderlineContainer>
              <ResumeDescription>
                {showMore ? description : description.substring(0, 223) + "..."}
                <ShowMore onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Show Less" : "Show More"}
                </ShowMore>
              </ResumeDescription>
            </ResumeSection>

            {/* Resume Section */}
            <ResumeSection>
              <ResumeContentTitle>EDUCATION</ResumeContentTitle>
              <ResumeUnderlineContainer>
                <ResumeUnderlineCircle></ResumeUnderlineCircle>
                <ResumeCircleLine></ResumeCircleLine>
              </ResumeUnderlineContainer>
              <ResumeDescription>
                I am currently a fourth-year student studying at the University
                of Business and Technology in the Faculty of Information
                Technology.
              </ResumeDescription>
            </ResumeSection>
            {/* END Resume Section */}
          </ResumeContent>
          {/* END Resume Content */}
        </ResumeBox>
      </ResumeContainer>
    </ContentContainer>
  );
}

export default Resume;

const ResumeContainer = styled.div`
  padding: 20px;

  @media screen and (min-width: 750px) {
    padding: 0px;
  }
`;

const ResumeBox = styled.div<ResumeProps>`
  max-width: 420px;
  width: 100%;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--dark-mode)" : "var(--light-color)"};
  border: ${(props) => props.isDarkMode && "1px solid #e2e8f0"};
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  border-radius: 0.5rem;
  margin: auto;
  margin-top: 2rem;

  @media screen and (min-width: 750px) {
    margin-top: 7rem;
  }
`;

// Resume Content Styles
const ResumeContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResumeImage = styled.img`
  width: 200px;
  object-fit: cover;

  @media screen and (min-width: 750px) {
    width: 240px;
  }
`;

// Resume Section Styles

const ResumeSection = styled.div`
  width: 100%;
  margin-right: auto;
  margin-top: 60px;
  @media screen and (min-width: 750px) {
    margin-top: 40px;
  }
`;

const ResumeContentTitle = styled.h3`
  font-size: 18px;
  color: var(--primary-color);
  font-weight: 600;
`;

const ResumeDescription = styled.p`
  font-size: 16px;
  color: var(--primary-color);
  line-height: 1.5;
  margin-top: 1.25rem;
`;

const ShowMore = styled.span`
  font-size: 13px;
  margin-left: 8px;
  cursor: pointer;
  font-weight: 700;
`;

// Underline Container Styles

const ResumeUnderlineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const ResumeUnderlineCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--secondary-color);
`;

const ResumeCircleLine = styled.div`
  width: 128px;
  height: 3.19px;
  background-color: var(--secondary-color);
`;
