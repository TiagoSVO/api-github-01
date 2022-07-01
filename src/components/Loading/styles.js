import styled, { keyframes } from 'styled-components';

const RotateSpinner = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    font-size: ${(props) => props.theme.fontSizes.normal}
    color: ${(props) => props.theme.colors.white}
`;

export const Spinner = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 1rem;
    animation: ${RotateSpinner} 1s linear infinite;
`;