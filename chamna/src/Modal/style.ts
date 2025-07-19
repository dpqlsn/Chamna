import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #f8eddc;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    gap: 4rem;
    margin-top: 6%;
`;

export const TimeButton = styled.button<{ selected: boolean }>`
    background: none;
    border: none;
    font-size: 2rem;
    font-family: "BM Kkubulim";
    color: ${({ selected }) => (selected ? '#6AACCE' : '#75685B')};
    cursor: pointer;
`;
