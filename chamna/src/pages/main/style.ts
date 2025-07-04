import styled from '@emotion/styled';
import Props from './types';

export const Container = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #6AACCE;
    opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
    transition: opacity 1s ease-in-out;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    height: auto;
`;

export const Title = styled.div`
    font-size: 2.3rem;
    color: #F7ECDA;
    margin-top: 6%;
`;