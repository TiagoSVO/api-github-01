import React from 'react';
import { Container, Message, ButtonBack } from './styles';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const redirectToGitPage = () => {
        navigate(`/`)
    }

    const onClickBack = (event) => {
        event.preventDefault();
        redirectToGitPage();
    }

    return (<Container>
                <Message>User not found...</Message>
        <ButtonBack onClick={(event) => onClickBack(event)}>Back</ButtonBack>
            </Container>
    )
}
    
export default NotFound;