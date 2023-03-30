import styled from "styled-components";

// import icons
import { SiLinkedin } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

// import assets
import resume from "../../assets/resume.svg";
import works from "../../assets/works.svg";

// import icons
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

// interfaces

interface HeaderLeftDropdownProps {
  isNavbarOpen: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
  isDarkMode: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HeaderItemDataProps {
  id: number;
  image: string;
  value: string;
  imageAltValue: string;
}

function HeaderLeftDropdown({
  isNavbarOpen,
  containerRef,
  isDarkMode,
  setIsNavbarOpen,
}: HeaderLeftDropdownProps) {
  return (
    <>
      <HeaderNav
        ref={containerRef}
        isNavbarOpen={isNavbarOpen}
        isDarkMode={isDarkMode}
      >
        <HeaderList>
          <NavItem>
            <HiHome size={22} />
            <NavLink to="/" onClick={() => setIsNavbarOpen(false)}>
              home
            </NavLink>
          </NavItem>
          <NavItem>
            <ImageBox>
              <Image src={resume} alt="resume" />
            </ImageBox>
            <NavLink to="/resume" onClick={() => setIsNavbarOpen(false)}>
              resume
            </NavLink>
          </NavItem>
          <NavItem>
            <ImageBox>
              <Image src={works} alt="works" />
            </ImageBox>
            <NavLink to="/works" onClick={() => setIsNavbarOpen(false)}>
              {" "}
              works
            </NavLink>
          </NavItem>
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
    </>
  );
}

export default HeaderLeftDropdown;

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
})<{ isNavbarOpen: boolean; isDarkMode: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 9999;
  width: 67%;
  height: 100vh;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--dark-mode)" : "#f4f4f4"};
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
  align-items: flex-start;
  gap: 0.6rem;
`;

// social Styles

const SocialContainer = styled.div`
  position: absolute;
  bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NavItem = styled.li`
  font-size: 16px;
  column-gap: 1rem;
  text-transform: capitalize;
  color: var(--primary-color);
  margin-top: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 15px;
  line-height: 22px;
`;

const ImageBox = styled.div`
  width: 22px;
  height: 22px;
`;

const Image = styled.img``;
