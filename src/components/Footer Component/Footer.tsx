import styled from "styled-components";
import { ContentContainer } from "../../App";

// import icons
import { TbLayersLinked } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <ContentContainer>
      <FooterContainer>
        <FooterTitle>Stay Connected</FooterTitle>
        <FooterLocation>Georgia,Tbilisi</FooterLocation>
        <FooterEmail>nick.mazmishvili@gmail.com</FooterEmail>
        <FooterSocialContainer>
          <TbLayersLinked
            size={23.5}
            cursor="pointer"
            color="var(--primary-color)"
          />
          <Link to="https://www.instagram.com/n.mazmishvili/" target="_blank">
            <AiOutlineInstagram
              size={23.5}
              cursor="pointer"
              color="var(--primary-color)"
            />
          </Link>
        </FooterSocialContainer>
      </FooterContainer>
    </ContentContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  padding: 20px;

  @media screen and (min-width: 750px) {
    margin-top: 8rem;
  }
`;

const FooterTitle = styled.h1`
  font-size: 18px;
  color: var(--primary-color);
  font-weight: 700;
`;

const FooterLocation = styled.p`
  margin-top: 2rem;
  font-size: 14px;
  color: #718096;
`;

const FooterEmail = styled.p`
  margin-top: 1.3rem;
  font-size: 18px;
  color: var(--primary-color);
  font-weight: 600;
  width: 100%;
  word-wrap: break-word;
`;

const FooterSocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 3rem;
`;
