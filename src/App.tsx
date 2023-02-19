import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import LandingPage from "./Pages/Landing Page/LandingPage";

interface GlobalStyleProps {
  isDarkMode: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');

  html{
    line-height: 1.5;
    font-family: 'Roboto', sans-serif !important;
  }

  *{
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: ${(props) =>
      props.isDarkMode ? "var(--dark-mode)" : "#f2f0ee"};
    @media screen and (min-width:750px){
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
  ol, ul , li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :root{
    --primary-color : #58595b;
    --secondary-color : #e45447;
    --light-color : #f2f0ee;
    --dark-mode : #0d1017
  }

`;

export const Container = styled.div<{ isDarkMode: boolean }>`
  position: relative;
  max-width: 1150px;
  width: 100%;
  margin: auto;
  background-color: ${(props) =>
    props.isDarkMode ? "var(--dark-mode)" : "#ffffff"};
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  border-radius: 0.5rem;
  padding: 0.5rem;

  @media screen and (min-width: 750px) {
    padding: 2rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 960px;
  width: 100%;
  margin: auto;
`;

function App() {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    storedDarkMode !== null ? JSON.parse(storedDarkMode) : false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <GlobalStyles isDarkMode={isDarkMode} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/*  */}
      <CopyrightContainer>
        <CopyrightTitle>© 2023 NIKOLOZ MAZMISHVILI.</CopyrightTitle>
        <CopyrightBoxContainer>
          <RedBox />
          <OrangeBox />
          <GrayBox />
          <BlueBox />
        </CopyrightBoxContainer>
      </CopyrightContainer>
    </>
  );
}

export default App;

const CopyrightContainer = styled.div`
  max-width: 1150px;
  width: 100%;
  padding: 2rem;
  margin: auto;
  margin-top: 1.25rem;

  @media screen and (min-width: 750px) {
    margin-top: 3rem;
  }
`;

const CopyrightTitle = styled.h1`
  font-size: 12px;
  text-align: center;
  color: var(--primary-color);
`;

const CopyrightBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 1.5rem;
`;

const RedBox = styled.div`
  background-color: #e45447;
  height: 12px;
`;

const OrangeBox = styled.div`
  background-color: #e29d51;
  height: 12px;
`;

const GrayBox = styled.div`
  background-color: #d8c7b8;
  height: 12px;
`;

const BlueBox = styled.div`
  background-color: #607393;
  height: 12px;
`;
