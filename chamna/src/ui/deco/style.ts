import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  max-height: 100vh;
  padding: 4rem;
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

export const Group = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 0.5rem;
  cursor: pointer;
`;

export const TopGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const Color = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const Text = styled.div`
  font-size: 1.65rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 4rem;
`;

export const Circle = styled.div`
  display: flex;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #f69700ff;
  cursor: pointer;
`;