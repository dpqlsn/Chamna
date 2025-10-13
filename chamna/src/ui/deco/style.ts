import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 100vh;
`;

export const Frame = styled.div`
  justify-content: center;
  width: 35%;
  height: 60vh;
  background-color: #FAFAFA;
  border-radius: 4px;
  gap: 1rem;
  padding: 2rem;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 45vh;
  object-fit: contain;
  background-color: transparent;
`;

export const Err = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: #75685B;
  background-color: transparent;
  text-align: center;
`;