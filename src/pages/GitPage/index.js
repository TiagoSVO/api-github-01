import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Container, Aside, Content } from './styles'
import { getUser } from '../../services/api';
import Profile from './Components/Profile';

const GitPage = () => {
    const { login } = useParams()
    const [loading, setLoading] = useState(true);
    const [erroLoad, settErrorLoad] = useState(false);
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
                settErrorLoad(true)
                console.log(response)
              })
    }

    useEffect(() => {
        loadDatas();
    }, [])

    if(loading) {
        return(<Loading>
            {erroLoad ? 'User not found' : 'Loading...'}
        </Loading>)
    }
    
    return(
        <Container>
            <Aside>
                <Profile user={user}/>
            </Aside>
            <Content>Content</Content>
        </Container>
    )
}

export default GitPage