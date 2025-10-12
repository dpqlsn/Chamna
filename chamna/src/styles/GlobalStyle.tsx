"use client";

import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      @font-face {
          font-family: 'KkuBulLim';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/BMkkubulimTTF-Regular.woff2') format('woff2');
          font-weight: normal;
          font-display: swap;
      }
      html,
      body,
      * {
        font-family: "KkuBulLim", sans-serif;
        color: #F7ECDA;
        background-color: #6AACCE;
      }

      #nprogress .bar {
        background: #364155 !important;
        height: 3px !important;
      }
      
      #nprogress .peg {
        box-shadow:
          0 0 10px rgba(54, 65, 85, 0.6),
          0 0 5px rgba(54, 65, 85, 0.6) !important;
      }
    `}
  />
);

export default GlobalStyle;