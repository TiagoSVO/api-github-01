import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Container, Aside, Content } from './styles'
import { getUser } from '../../services/api';

const GitPage = () => {
    const { login } = useParams()
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();

    const loadUser = async () => {
        const responseUser = await getUser(login);
        setUser(responseUser.data)
    }

    const loadDatas = async () => {
        await Promise.all([loadUser()])
        setLoading(false);
    }

    useEffect(() => {
        loadDatas();
    }, [])

    if(loading) {
        return(<Loading>Loading...</Loading>)
    }
    
    return(
        <Container>
            <Aside>Aside from {`${user.login}`}</Aside>
            <Content>Content</Content>
        </Container>
    )
}

export default GitPage