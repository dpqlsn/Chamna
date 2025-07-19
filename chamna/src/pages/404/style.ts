import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    row-gap: 1.2rem;
    overflow: auto;
`;

export const Logo = styled.img`
    width: 5%;
`;

export const Title = styled.div`
    font-size: 1.6rem;
    color: #F7ECDA;
`;

export const SubTitle = styled.div`
    font-size: 1rem;
    color: #B0CCD4;
    cursor: pointer;

    :hover{
        text-decoration: underline;
    }
`;