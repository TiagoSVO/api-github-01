import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Load, Container, Aside, Content } from './styles'
import { getUser } from '../../services/api';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';

const GitPage = () => {
    const { login } = useParams()
    const [loading, setLoading] = useState(true);
    const [erroLoad, setErrorLoad] = useState(false);
    const [user, setUser] = useState();

    const loadUser = async () => {
        const responseUser = await getUser(login);
        setUser(responseUser.data)
    }

    const loadDatas = async () => {
        await Promise.all([loadUser()])
              .then(response => {
                setLoading(false);
              })
              .catch(response => {
                setErrorLoad(true)
              })
    }

    useEffect(() => {
        loadDatas();
    }, [])

    if(loading) {
        return(<Load>
            {erroLoad ? <NotFound /> : <Loading />}
        </Load>)
    }
    
    return(
        <Container>
            <Aside>
                <Profile user={user}/>
            </Aside>
            <Content>
                <Repositories />
            </Content>
        </Container>
    )
}

export default GitPage