import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// import components
import Header from "./components/Header Component/Header";

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
    background-color: ${(props) => (props.isDarkMode ? "#181818" : "#f2f0ee")};
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
  }

`;

export const Container = styled.div`
  max-width: 1150px;
  width: 100%;
  margin: auto;
  background-color: #ffffff;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  border-radius: 0.5rem;
  padding: 0.5rem;

  @media screen and (min-width: 750px) {
    padding: 2rem;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles isDarkMode={isDarkMode} />
      <Header />
    </>
  );
}

export default App;
