import { createGlobalStyle } from 'styled-components';

import WantedSansRegularTTF from "../assets/fonts/WantedSans-Regular.ttf";
import WantedSansRegularOTF from "../assets/fonts/WantedSans-Regular.otf";
import WantedSansRegularWOFF2 from "../assets/fonts/WantedSans-Regular.woff2";
import WantedSansBoldTTF from "../assets/fonts/WantedSans-Bold.ttf";
import WantedSansBoldOTF from "../assets/fonts/WantedSans-Bold.otf";
import WantedSansBoldWOFF2 from "../assets/fonts/WantedSans-Bold.woff2";
import WantedSansExtraBoldTTF from "../assets/fonts/WantedSans-ExtraBold.ttf";
import WantedSansExtraBoldOTF from "../assets/fonts/WantedSans-ExtraBold.otf";
import WantedSansExtraBoldWOFF2 from "../assets/fonts/WantedSans-ExtraBold.woff2";

import RedditMonoRegularTTF from "../assets/fonts/RedditMono-Regular.ttf";
import RedditMonoRegularWOFF from "../assets/fonts/RedditMono-Regular.woff";
import RedditMonoRegularWOFF2 from "../assets/fonts/RedditMono-Regular.woff2";
import RedditMonoSemiBoldTTF from "../assets/fonts/RedditMono-SemiBold.ttf";
import RedditMonoSemiBoldWOFF from "../assets/fonts/RedditMono-SemiBold.woff";
import RedditMonoSemiBoldWOFF2 from "../assets/fonts/RedditMono-SemiBold.woff2";
import RedditMonoBoldTTF from "../assets/fonts/RedditMono-Bold.ttf";
import RedditMonoBoldWOFF from "../assets/fonts/RedditMono-Bold.woff";
import RedditMonoBoldWOFF2 from "../assets/fonts/RedditMono-Bold.woff2";
import RedditMonoExtraBoldTTF from "../assets/fonts/RedditMono-ExtraBold.ttf";
import RedditMonoExtraBoldWOFF from "../assets/fonts/RedditMono-ExtraBold.woff";
import RedditMonoExtraBoldWOFF2 from "../assets/fonts/RedditMono-ExtraBold.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Wanted Sans";
    font-weight: normal;
    font-weight: 400;
    src: local("Wanted Sans"), local("Wanted Sans"),
      url(${WantedSansRegularTTF}) format("ttf"),
      url(${WantedSansRegularOTF}) format("otf"),
      url(${WantedSansRegularWOFF2}) format("woff2"),
  }

  @font-face {
    font-family: "Wanted Sans";
    font-weight: bold;
    font-weight: 700;
    src: local("Wanted Sans"), local("Wanted Sans"),
      url(${WantedSansBoldTTF}) format("ttf"),
      url(${WantedSansBoldOTF}) format("otf"),
      url(${WantedSansBoldWOFF2}) format("woff2"),
  }

  @font-face {
    font-family: "Wanted Sans";
    font-weight: 800;
    src: local("Wanted Sans"), local("Wanted Sans"),
      url(${WantedSansExtraBoldTTF}) format("ttf"),
      url(${WantedSansExtraBoldOTF}) format("otf"),
      url(${WantedSansExtraBoldWOFF2}) format("woff2"),
  }

  @font-face {
    font-family: "Reddit Mono";
    font-weight: normal;
    font-weight: 400;
    src: local("Reddit Mono"), local("Reddit Mono"),
      url(${RedditMonoRegularTTF}) format("ttf"),
      url(${RedditMonoRegularWOFF}) format("woff"),
      url(${RedditMonoRegularWOFF2}) format("woff2"),
  }

  @font-face {
    font-family: "Reddit Mono";
    font-weight: 600;
    src: local("Reddit Mono"), local("Reddit Mono"),
      url(${RedditMonoSemiBoldTTF}) format("ttf"),
      url(${RedditMonoSemiBoldWOFF}) format("woff"),
      url(${RedditMonoSemiBoldWOFF2}) format("woff2"),
  }

  @font-face {
    font-family: "Reddit Mono";
    font-weight: 700;
    font-weight: bold;
    src: local("Reddit Mono"), local("Reddit Mono"),
      url(${RedditMonoBoldTTF}) format("ttf"),
      url(${RedditMonoBoldWOFF}) format("woff"),
      url(${RedditMonoBoldWOFF2}) format("woff2"),
  }

  @font-face {
    font-family: "Reddit Mono";
    font-weight: 800;
    src: local("Reddit Mono"), local("Reddit Mono"),
      url(${RedditMonoExtraBoldTTF}) format("ttf"),
      url(${RedditMonoExtraBoldWOFF}) format("woff"),
      url(${RedditMonoExtraBoldWOFF2}) format("woff2"),
  }

  html {
    overflow-x: hidden; 
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  input[type="email"] {
    background-color: none !important;
  }

  .sticky {
    position: fixed !important;
    background: #DBF3E7;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.06);
  }
`;

export default GlobalStyle;
