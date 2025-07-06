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
    position: fixed;
    bottom: 0;
    left: 0;
    gap: 40%;
    width: 100%;
    padding: 1rem 0; 
`;

export const Logo = styled.img`
    width: 4%;
`;

export const Camera = styled.img`
    width: 2.5%;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: scale(1.1);
    }
`;

export const Clock = styled.img`
    width: 2%;
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: scale(1.1);
    }
`;

export const Pic = styled.img`
    width: 2%;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const VideoWrapper = styled.div`
    flex: none;
    height: 84vh; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: scaleX(-1);
    }
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scaleX(-1);
`;

export const VideoRight = styled(Video)`
    filter: brightness(1.1) contrast(1.2) saturate(1.3) hue-rotate(10deg);
`;