import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  min-height: 100vh;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Logo = styled.img`
  width: 10%;
`

export const Title = styled.h1`
  font-size: 2.5em;
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-firection: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1em 0;
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.metalDark};
  color: ${(props) => props.theme.colors.text};
  border-radius: 3px 0 0 3px;
  line-height: 1em;
  font-size: 1.7em;
  padding: 0.2em;
  text-align: center;
  transition: 0.3s;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
  :-ms-input-placeholder {
     color: ${(props) => props.theme.colors.metalDark};
  }

  :hover, :focus, active {
    transition: .3s;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.metalDark};
  color: ${(props) => props.theme.colors.text};
  border-radius: 0 3px 3px 0;
  line-height: 1em;
  font-size: 1.9em;
  padding: 0.21em;
  text-align: center;
  transition: .3s;

  :hover {
    transition: .3s;
    box-shadow: 2px 0 5px 1.5px ${(props) => props.theme.colors.metalDark};
  }
`;