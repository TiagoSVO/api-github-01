import { createGlobalStyle } from 'styled-components';

import NunitoTTFBlack from "../assets/fonts/Nunito/static/Nunito-Black.ttf";
import NunitoTTFBlackItalic from "../assets/fonts/Nunito/static/Nunito-BlackItalic.ttf";
import NunitoTTFExtraBold from "../assets/fonts/Nunito/static/Nunito-ExtraBold.ttf";
import NunitoTTFExtraBoldItalic from "../assets/fonts/Nunito/static/Nunito-ExtraBoldItalic.ttf";
import NunitoTTFBold from "../assets/fonts/Nunito/static/Nunito-Bold.ttf";
import NunitoTTFBoldItalic from "../assets/fonts/Nunito/static/Nunito-BoldItalic.ttf";
import NunitoTTFSemiBold from "../assets/fonts/Nunito/static/Nunito-SemiBold.ttf";
import NunitoTTFSemiBoldItalic from "../assets/fonts/Nunito/static/Nunito-SemiBoldItalic.ttf";
import NunitoTTFMedium from "../assets/fonts/Nunito/static/Nunito-Medium.ttf";
import NunitoTTFMediumItalic from "../assets/fonts/Nunito/static/Nunito-MediumItalic.ttf";
import NunitoTTFRegular from "../assets/fonts/Nunito/static/Nunito-Regular.ttf";
import NunitoTTFItalic from "../assets/fonts/Nunito/static/Nunito-Italic.ttf";
import NunitoTTFLight from "../assets/fonts/Nunito/static/Nunito-Light.ttf";
import NunitoTTFLightItalic from "../assets/fonts/Nunito/static/Nunito-LightItalic.ttf";
import NunitoTTFExtraLight from "../assets/fonts/Nunito/static/Nunito-ExtraLight.ttf";
import NunitoTTFExtraLightItalic from "../assets/fonts/Nunito/static/Nunito-ExtraLightItalic.ttf";


export default createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFBlack}) format('truetype');
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFBlackItalic}) format('truetype');
    font-style: italic;
    font-weight: 900;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFExtraBold}) format('truetype');
    font-style: normal;
    font-weight: 800;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFExtraBoldItalic}) format('truetype');
    font-style: italic;
    font-weight: 800;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFBold}) format('truetype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFBoldItalic}) format('truetype');
    font-style: italic;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFSemiBold}) format('truetype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFSemiBoldItalic}) format('truetype');
    font-style: italic;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFMedium}) format('truetype');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFMediumItalic}) format('truetype');
    font-style: italic;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFItalic}) format('truetype');
    font-style: italic;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFLight}) format('truetype');
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFLightItalic}) format('truetype');
    font-style: italic;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFExtraLight}) format('truetype');
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTFExtraLightItalic}) format('truetype');
    font-style: italic;
    font-weight: 200;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    color: ${(props) => props.theme.colors.link}
  }
  a.hover {
    text-decoration: underline;
  }

  body, input, p, a, button {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-family: ${(props) => props.theme.fonts};
  }

  small {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.champagne};
  }
`;
