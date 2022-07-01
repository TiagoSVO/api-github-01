import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    margin-top: 2erm;
    color: ${ (props) => props.theme.colors.white };

    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
        grid-template-columns: auto;
    }
`;

export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    line-height: auto;
    padding: 15px;
    border-left: 3px solid ${ (props) => props.color || props.theme.colors.white };
    background: ${ (props) => props.theme.colors.background };
    border-radius: 3px;
    transition: 0.3s;

    &:hover {
        box-shadow: 0px 0px 10px ${ (props) => props.color || props.theme.colors.white };
        transform: scale(1.1);
    }
    `;

export const BoxTitle = styled.h3`
    font-size: ${ (props) => props.theme.fontSizes.large };
`;

export const BoxDescription = styled.small`
    color: ${ (props) => props.theme.colors.white };
`;

export const BoxFooter = styled.div`
    color: ${ (props) => props.color || props.theme.colors.white };
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BoxLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
       color: inherit;
    }
`;