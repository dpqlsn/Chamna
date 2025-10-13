import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-height: 100vh;
  padding: 4rem 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  row-gap: 2rem;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: aqua;
`;

export const Group = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Frame = styled.div`
  display: flex;
  width: 45%;
  height: 38vh;
  background-color: beige;
`;

export const Flower = styled.div`
  display: flex;
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  z-index: 1;
`;
