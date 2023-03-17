import styled from "styled-components";

// import styled components
import {
  Underline,
  UnderlineCircle,
  UnderlineContainer,
} from "../../components/Service Component/Service";

// import icons
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

function ContactContent() {
  return (
    <Contact>
      <ResumeTitle>Contact</ResumeTitle>
      <UnderlineContainer>
        <UnderlineCircle />
        <Underline />
      </UnderlineContainer>
      <ResumeDescription>
        {/*  */}
        <ResumeList>
          <ResumeItem>
            <FaUser size={19} />
            <ResumeItemResult>Nikoloz Mazmishvili</ResumeItemResult>
          </ResumeItem>

          <ResumeItem>
            <MdEmail size={19} />
            <ResumeItemResult>nick.mazmishvili@gmail.com</ResumeItemResult>
          </ResumeItem>

          <ResumeItem>
            <BsTelephoneFill size={18} />
            <ResumeItemResult>+995 593-20-99-77</ResumeItemResult>
          </ResumeItem>
        </ResumeList>
        {/*  */}
      </ResumeDescription>
    </Contact>
  );
}

export default ContactContent;

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

const Contact = styled.div`
  margin-top: 2.5rem;
`;

const ResumeList = styled.ul``;

const ResumeItem = styled.li`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 17px;
  height: 20px;
`;

const ResumeItemResult = styled.p`
  font-size: 15px;
  font-style: oblique;
`;
