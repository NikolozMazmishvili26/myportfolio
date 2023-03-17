import styled from "styled-components";

// import styled components
import {
  Underline,
  UnderlineCircle,
  UnderlineContainer,
} from "../../components/Service Component/Service";

interface ResumeContentProps {
  title: string;
  description: string;
}

function ResumeContent({ title, description }: ResumeContentProps) {
  return (
    <Resume>
      <ResumeTitle>{title}</ResumeTitle>
      <UnderlineContainer>
        <UnderlineCircle />
        <Underline />
      </UnderlineContainer>
      <ResumeDescription>{description}</ResumeDescription>
    </Resume>
  );
}

export default ResumeContent;

const ResumeTitle = styled.h1`
  font-size: 24px;
  color: var(--primary-color);
  font-weight: 700;
`;

const ResumeDescription = styled.p`
  font-size: 14px;
  color: var(--primary-color);
  line-height: 1.5;
  margin-top: 2rem;

  @media screen and (min-width: 750px) {
    font-size: 15px;
  }
`;

const Resume = styled.div`
  margin-top: 2.5rem;
`;
