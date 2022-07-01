import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Load, Container, Aside, Content } from './styles'
import { getUser, getRepos } from '../../services/api';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';

const GitPage = () => {
    const { login } = useParams()
    const [loading, setLoading] = useState(true);
    const [erroLoad, setErrorLoad] = useState(false);
    const [user, setUser] = useState();
    const [repositories, setRepositories] = useState();
    const [currentLanguage, setCurrentLanguage] = useState();

    const loadUser = async () => {
        const responseUser = await getUser(login);
        setUser(responseUser.data)
    }

    const loadRepositories = async () => {
        const responseRepos = await getRepos(login);
        setRepositories(responseRepos.data);
    }

    const loadDatas = async () => {
        await Promise.all([loadUser(), loadRepositories()])
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

    const onClickFilter = (language) => {
        setCurrentLanguage(language)
    }

    if(loading) {
        return(<Load>
            {erroLoad ? <NotFound /> : <Loading />}
        </Load>)
    }
    
    return(
        <Container>
            <Aside>
                <Profile user={user} 
                         repositories={repositories} 
                         onClickFilter={onClickFilter} 
                         currentLanguage={currentLanguage}
                />
            </Aside>
            <Content>
                <Repositories currentLanguage={currentLanguage} repositories={repositories} />
            </Content>
        </Container>
    )
}

export default GitPage