import styled, { css } from "styled-components"

// import icons
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoCloseOutline} from 'react-icons/io5'

// import styledCOmponents
import {Container} from '../../App'

// import assets
import logo from '../../assets/logo.png'
import { useState } from "react"

function Header() {

    const [isDropdownOpen,setIsDropdownOpen] = useState<boolean>(false)

  return (
    <MainHeader>
        <HeaderContainer>
            <LogoImage src={logo} alt="logoIMG"/>
            {isDropdownOpen 
            ? <StyledIoCloseOutline onClick={() => setIsDropdownOpen(false)}/> 
            : <StyledRxHamburgerMenu onClick={() => setIsDropdownOpen(true)}/>
            }
        
            <HeaderDropdown isDropdownOpen={isDropdownOpen}>
                <HeaderDropdownNav>
                    <HeaderDropdownList>
                        <HeaderDropdownItem>Home</HeaderDropdownItem>
                        <HeaderDropdownItem>Skills</HeaderDropdownItem>
                        <HeaderDropdownItem>About</HeaderDropdownItem>
                        <HeaderDropdownItem>Projects</HeaderDropdownItem>
                        <HeaderDropdownItem>Contact</HeaderDropdownItem>
                    </HeaderDropdownList>
                </HeaderDropdownNav>
            </HeaderDropdown>

        </HeaderContainer>
    </MainHeader>
  )
}

export default Header



const MainHeader = styled.header`
    width: 100%;
    height: 50px;
    background-color: #1e1345;
    display: flex;
    align-items: center;
    border-bottom: 1px solid hsla(0,0%,100%,.1);

    @media screen and (min-width:1000px){
        height: 80px;
    }

`

const HeaderContainer = styled.div`
    max-width: 1344px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    margin: auto;
`

const LogoImage = styled.img`
    width: 120px;
    object-fit: cover;
`

const StyledRxHamburgerMenu = styled(RxHamburgerMenu)`
  color: #fff;
  font-size: 30px;
  cursor: pointer;

  @media screen and (min-width:1000px){
    display: none;
  }

`;

const StyledIoCloseOutline = styled(IoCloseOutline)`
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    @media screen and (min-width:1000px){
      display: none;
    }
`

// dropdown styled components

interface DropdownProps  {
    isDropdownOpen : boolean
}

const HeaderDropdown = styled.div<DropdownProps>`
  position: absolute;
  top: 50px;
  left: 0px;
  background-color: #1e1345;
  width: 100%;
  height: ${(props) => (props.isDropdownOpen ? "210px" : "0px")};
  overflow: hidden;
  transition: height 0.2s ease-in;

  @media screen and (min-width:1000px){
    display: none;
  }

`;


const HeaderDropdownNav = styled.nav``

const HeaderDropdownList = styled.ul`
    padding: 28px 0px 0px 45px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const HeaderDropdownItem = styled.li`
    color:#fff;
    font-size: 14px;
`