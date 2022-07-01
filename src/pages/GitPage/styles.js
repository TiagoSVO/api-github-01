import styled from 'styled-components'

export const Load = styled.div`
    display: grid;
    min-height: 100vh;
    place-items: center;
`

export const Container = styled.main`
    display: grid;
    min-height: 100vh;
    width: 100%;
    grid-template-columns: minmax(250px, 15%) 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "aside content";
`

export const Aside = styled.aside`
    grid-area: aside;
    background-color: ${(props) => props.theme.colors.background};
    z-index: 1;
`

export const Content = styled.article`
    grid-area: content;
    background-color: ${(props) => props.theme.colors.container};
    padding: 40px;
`