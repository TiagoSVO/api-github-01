import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 250px 1fr 50px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
    gap: 10px;
`

export const Header = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Avatar = styled.img`
    height:70%;
    border-radius: 50%;
    margin-bottom: 1rem;
`

export const Login = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.title};
`

export const Name = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.subtitle};
    font-weight: normal;
`

export const Content = styled.div`
    grid-area: content;
    background-color: blue;
    height: 100%;
`


export const Footer = styled.footer`
    grid-area: footer;
    background-color: green;
`

