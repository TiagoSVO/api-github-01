import React from 'react';
import { Container, Spinner } from './styles';
import { ImSpinner11 } from 'react-icons/im'

const Loading = () => (
    <Container>
        <Spinner>
            <ImSpinner11 size={25}/>
        </Spinner>
        <span>Loading...</span>
    </Container>
)

export default Loading;