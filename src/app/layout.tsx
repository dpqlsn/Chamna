"use client";

import styled from "@emotion/styled";
import GlobalStyle from "@/styles/GlobalStyle";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
        <title>참나</title>
      </head>
      <body>
        <Container>
          <GlobalStyle />
          {children}
        </Container>
      </body>
    </html>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  overflow-x: auto;
`;