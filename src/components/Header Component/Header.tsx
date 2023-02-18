import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// import styled components
import { Container } from "../../App";

// import assets
import logo from "../../assets/logo.png";
import sun from "../../assets/sun.svg";
import burger from "../../assets/burger.svg";
import email from "../../assets/email.svg";
import resume from "../../assets/resume.svg";
import works from "../../assets/works.svg";
import shelf from "../../assets/shelf.svg";

// import icons
import { SiLinkedin } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <MainHeader>
        <HeaderLeftSide>
          {" "}
          <HeaderImage src={logo} alt="LOGO" />
          <EmailBox>
            <img src={email} alt="emailImage" />
            <EmailTitle>nick.mazmishvili@gmail.com</EmailTitle>
          </EmailBox>
          <SunImage src={sun} alt="sunImage" />
        </HeaderLeftSide>

        <HeaderRightSide>
          <Nav>
            <NavList>
              <NavItem>
                <img src={works} alt="worksImage" /> works
              </NavItem>
              <NavItem>
                <img src={resume} alt="resumeImage" /> resume
              </NavItem>
              <NavItem>
                <img src={shelf} alt="shelfImage" /> shelf
              </NavItem>
            </NavList>
          </Nav>
        </HeaderRightSide>

        <BurgerImage
          src={burger}
          alt="burgerImage"
          onClick={() => setIsNavbarOpen(true)}
        />
      </MainHeader>
      {/* Opened Navigation */}
      <HeaderNav ref={containerRef} isNavbarOpen={isNavbarOpen}>
        <HeaderList>
          <HeaderItem>
            <img src={email} alt="emailImage" /> email
          </HeaderItem>
          <HeaderItem>
            <img src={resume} alt="resumeImage" />
            resume
          </HeaderItem>
          <HeaderItem>
            {" "}
            <img src={works} alt="worksImage" />
            works
          </HeaderItem>
          <HeaderItem>
            <img src={shelf} alt="shelfImage" />
            shelf
          </HeaderItem>
        </HeaderList>
        {/* Nav SocialContainer */}
        <SocialContainer>
          <SiLinkedin size={15.75} color="#58595b" />
          <AiOutlineGithub size={18} color="#58595b" />
          <BsInstagram size={15.75} color="#58595b" />
        </SocialContainer>
      </HeaderNav>
      {/* background blur when isNavbarOpen true */}
      <BackgroundBlur isNavbarOpen={isNavbarOpen} />
      {/*  */}
    </Container>
  );
}

export default Header;

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
`;

// Header Left Styles

const HeaderImage = styled.img`
  width: 48px;
  cursor: pointer;
`;

// EmailBox styles

const EmailBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6rem;
  gap: 7px;
  transition: all 0.2s;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const EmailTitle = styled.h4`
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 700;
`;

// EmailBox styles

const SunImage = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 6rem;
  cursor: pointer;

  @media screen and (min-width: 750px) {
    margin-left: 2.5rem;
  }
`;

// Header Left Styles

// Header Right Styles

const HeaderRightSide = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const Nav = styled.nav``;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  color: var(--primary-color);
  cursor: pointer;
  text-transform: capitalize;
`;

// mobile styled components

const BurgerImage = styled.img`
  width: 26px;
  cursor: pointer;
  @media screen and (min-width: 750px) {
    display: none;
  }
`;

// open Navbar styles

const BackgroundBlur = styled.div<{ isNavbarOpen: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isNavbarOpen ? "block" : "none")};
  @media screen and (min-width: 750px) {
    display: none;
  }
`;

const HeaderNav = styled.nav.withConfig({
  displayName: "HeaderNav",
  componentId: "HeaderNav",
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !["ref"].includes(prop) && defaultValidatorFn(prop),
})<{ isNavbarOpen: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 67%;
  height: 100%;
  background-color: #f4f4f4;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  padding-top: 2.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  transform: ${(props) =>
    props.isNavbarOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.2s ease-in;

  @media screen and (min-width: 750px) {
    display: none;
  }
`;

const HeaderList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const HeaderItem = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  text-transform: capitalize;
  color: var(--primary-color);
  margin-top: 0.75rem;
  cursor: pointer;
`;

// social Styles

const SocialContainer = styled.div`
  position: absolute;
  bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 15px;
`;
