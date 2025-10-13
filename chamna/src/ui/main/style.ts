import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-height: 100vh;
  padding: 4rem 10rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80vh;
  row-gap: 2rem;
`;

export const LightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 80vh;
  row-gap: 1rem;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: aqua;
`;

export const Group = styled.div`
  display: flex;
  align-self: start;
  gap: 1rem;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  background-color: beige;
  font-size: 2rem;
  color: #75685B;
`;

export const Flower = styled.div`
  display: flex;
  position: absolute;
  background-color: transparent;
  top: 0.5rem;
  left: 2.5rem;
  z-index: 1;
`;