import styled from '@emotion/styled';
import Props from './types';

export const Container = styled.div<Props>`
    opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
    transition: opacity 1s ease-in, transform 1s ease-in;
    height: 100vh;
`;

export const Top = styled.div`
    width: 100%;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const Logo = styled.img`
    width: 4%;
`;

export const Camera = styled.img`
    width: 2.5%;
`;

export const Clock = styled.img`
    width: 2%;
`;

export const Pic = styled.img`
    width: 2%;
`;