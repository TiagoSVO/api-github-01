import styled from "styled-components";
import { Link } from 'react-router-dom';

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
    padding: 20px 0 0 0;
`

export const Back = styled.button`
    display: flex;
    align-self: flex-start;
    border: none;
    margin: 5px;
    padding: 5px;
    background: ${(props) => props.theme.colors.white}33;
    border-radius: 50%;
    transition: .3s;

    &:hover {
        transform: scale(1.05);
        background: ${(props) => props.theme.colors.white}88;
    }    

    &:active {
        transform: scale(1);
    } 
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
    height: 100%;
`

export const Footer = styled.footer`
    grid-area: footer;
    border-top: 0.1em solid ${(props) => props.theme.colors.metal};
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;    
`

