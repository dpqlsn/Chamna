import styled from '@emotion/styled';
import Props from './types';

export const Container = styled.div<Props>`
    opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
    transition: opacity 1s ease-in, transform 1s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;