import styled from "@emotion/styled";
import Image from 'next/image';

const Basic = `
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  width: 100%;
  max-height: 100vh;
  padding: 4rem 4rem;
`;

export const Wrapper = styled.div`
  ${Basic}
  width: 100%;
  height: 82vh;
`;

export const LightWrapper = styled.div`
  ${Basic}
  width: 30%;
  height: 82vh;
  gap: 1rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: flex-start; 
`;

export const Frame = styled.div`
  ${Basic}
  justify-content: center;
  width: 100%;
  height: 40vh;
  background-color: #F7ECDA;
  border-radius: 4px;
  font-size: 1.6rem;
  gap: 1rem;
  color: #75685B;
  padding: 1.25rem;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.04);
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export const Flower = styled.div`
  display: flex;
  position: absolute;
  background-color: transparent;
  top: 0.5rem;
  left: 2.5rem;
  z-index: 1;
`;

export const Count = styled.div`
  position: absolute; 
  top: 1rem; 
  left: 50%; 
  transform: translateX(-50%);
  font-size: 3rem;
  font-weight: bold;
  border-radius: 8px;
  z-index: 1; 
`;


export const Timer = styled.button`
  font-size: 1.6rem;
  font-weight: 400;
  border: none;
  padding: 0.5rem 0rem;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TimerOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Icon = styled(Image)`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;