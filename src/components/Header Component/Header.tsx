import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// import assets
import logo from "../../assets/logo.png";
import sun from "../../assets/sun.svg";
import burger from "../../assets/burger.svg";
import email from "../../assets/email.svg";
import moon from "../../assets/moon.svg";

// import icons
import HeaderLeftDropdown from "./HeaderLeftDropdown";
import HeaderNav from "./HeaderNav";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
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

  // avoid scroll when navbar is open

  useEffect(() => {
    if (isNavbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isNavbarOpen]);

  return (
    <>
      <MainHeader>
        {/* Header left Side */}
        <HeaderLeftSide>
          {" "}
          <HeaderImage src={logo} alt="LOGO" />
          <EmailBox>
            <img src={email} alt="emailImage" />
            <EmailTitle>nick.mazmishvili@gmail.com</EmailTitle>
          </EmailBox>
          {isDarkMode ? (
            <BgColorSwitcherImage
              src={sun}
              alt="sunImage"
              onClick={() => setIsDarkMode(false)}
            />
          ) : (
            <BgColorSwitcherImage
              src={moon}
              alt="moonImage"
              onClick={() => setIsDarkMode(true)}
            />
          )}
        </HeaderLeftSide>
        {/* END Header left Side */}

        {/* Header Right Side */}
        <HeaderRightSide>
          <HeaderNav isDarkMode={isDarkMode} />
        </HeaderRightSide>
        {/* END Header Right Side */}

        {/* FOR MOBILE HEADER */}
        <BurgerImage
          src={burger}
          alt="burgerImage"
          onClick={() => setIsNavbarOpen(true)}
        />
      </MainHeader>

      {/* Opened Navigation */}
      <HeaderLeftDropdown
        containerRef={containerRef}
        isNavbarOpen={isNavbarOpen}
        isDarkMode={isDarkMode}
      />
      {/* END FOR MOBILE HEADER */}
    </>
  );
}

export default Header;

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 750px) {
    max-width: 960px;
    width: 100%;
    margin: auto;
  }
`;

const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
`;

// Header Left Styles

const HeaderImage = styled.img`
  width: 48px;
  cursor: pointer;

  @media screen and (min-width: 750px) {
    display: none;
  }
`;

// EmailBox styles

const EmailTitle = styled.h4`
  font-size: 14px;
  color: var(--primary-color);
  font-weight: 700;
`;

const EmailBox = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  transition: all 0.2s;
  cursor: pointer;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

// EmailBox styles

const BgColorSwitcherImage = styled.img`
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

// mobile styled components

const BurgerImage = styled.img`
  width: 26px;
  cursor: pointer;
  @media screen and (min-width: 750px) {
    display: none;
  }
`;
