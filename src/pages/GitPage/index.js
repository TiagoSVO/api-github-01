import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Container, Aside, Content } from './styles'

const GitPage = () => {
    const { login } = useParams()
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 3000)

    if(loading) {
        return(<Loading>Loading...</Loading>)
    }
    
    return(
        <Container>
            <Aside>Aside</Aside>
            <Content>Content</Content>
        </Container>
    )
}

export default GitPage