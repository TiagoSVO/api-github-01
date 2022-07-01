import styled from 'styled-components';

export const ListLanguage = styled.ul`
    display: flex;
    flex-direction: column;
    flex-flow: column-nowrap;
    justify-content: space-between;
`;

export const ItemLanguage = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 35px 0px 0px;
    background-color: ${(props) => props.theme.colors.container};
    padding: 5px 15px;
    border-radius: 0 15px 15px 0;
    border-left: 3px solid ${(props) => props.color ? props.color : props.theme.colors.white};
    color: ${(props) => props.color ? props.color : props.theme.colors.white};
    cursor: pointer;
    transition: 0.3s;

    &:hover, &.selected {
        color: ${(props) => !props.color ? props.color : props.theme.colors.white};
        background-color: ${(props) => props.color ? props.color : props.theme.colors.white};
        margin: 5px 15px 0px 0px;
        transition: 0.3s;
    }
`;

export const ClearLanguage = styled.button`
    border: none;
    border-left: 3px solid ${(props) => props.theme.colors.white }00;
    background: ${(props) => props.theme.colors.white }00;
    color: ${(props) => props.theme.colors.white };
    font-size: ${(props) => props.theme.fontSizes.normal};
    margin-top: 15px;
    margin-right: 35px;
    padding: 5px;
    text-align: left;
    transition: .3s;
    border-radius: 0 15px 15px 0;
    
    &:hover {
        background: ${(props) => props.theme.colors.white }88;
        border-left: 3px solid ${(props) => props.theme.colors.white };
    }
`