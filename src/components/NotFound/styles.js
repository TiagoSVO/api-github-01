import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Message = styled.p`
    font-size: ${(props) => props.theme.fontSizes.normal}
`;

export const ButtonBack = styled.button`
    border: 1px solid ${(props) => props.theme.colors.metal};
    padding: 0.5rem;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.container};
    margin-top: 1rem;
    cursor: pointer;
    justify-content: stretch;
    transition: .3s;

    &:hover {
        background: ${(props) => props.theme.colors.container}88;
    }
`;