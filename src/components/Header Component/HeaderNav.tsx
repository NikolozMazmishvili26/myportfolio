import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface HeaderNav {
  isDarkMode: boolean;
}

// import assets
import resume from "../../assets/resume.svg";
import works from "../../assets/works.svg";

// import icons
import { HiHome } from "react-icons/hi";

const HeaderNavItemData = [{ id: 1 }];

function HeaderNav({ isDarkMode }: HeaderNav) {
  return (
    <nav>
      <NavList>
        <NavItem>
          <div>
            <HiHome color="var(--primary-color)" size={22} />
          </div>
          <div>
            <StyledNavLink to="/" isDarkMode={isDarkMode}>
              home
            </StyledNavLink>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <img src={works} alt="worksImage" />
          </div>
          <div>
            <StyledNavLink to="/works" isDarkMode={isDarkMode}>
              works
            </StyledNavLink>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <img src={resume} alt="resumeImage" />
          </div>
          <div>
            <StyledNavLink to="/resume" isDarkMode={isDarkMode}>
              resume
            </StyledNavLink>
          </div>
        </NavItem>
        {/*  */}
      </NavList>
    </nav>
  );
}

export default HeaderNav;

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

const StyledNavLink = styled(NavLink)<{ isDarkMode: boolean }>`
  text-decoration: none;
  color: var(--primary-color);
  &.active {
    color: ${(props) =>
      props.isDarkMode ? "#bbb7b7" : "var(--secondary-color)"};
    font-weight: 700;
  }
`;
