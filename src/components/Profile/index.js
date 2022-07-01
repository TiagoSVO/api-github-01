import React from 'react';
import { Avatar, Container, Content, Footer, Header, Name, Login, Back } from './styles';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import ProfileInfos from '../ProfileInfos';
import LanguageFilter from '../LanguageFilter';
import { useNavigate } from 'react-router-dom';
import { getLanguagesFromRepositories } from '../../services/utils';

const Profile = ({ user, repositories }) => {
    const navigate = useNavigate();

    const redirectToGitPage = () => {
        navigate(`/`)
    }

    const onClickBack = (event) => {
        event.preventDefault();
        redirectToGitPage();
    }

    const languages = getLanguagesFromRepositories(repositories)

    return(<Container>
        <Header>
            <Back onClick={(event) => onClickBack(event)}>
                <MdOutlineKeyboardBackspace size={25} />
            </Back>
            <Avatar src={`${user.avatar_url}`} />
            <Login>{user.login}</Login>
            <Name>{user.name}</Name>
        </Header>
        <Content>
            <ProfileInfos user={user} />
            <LanguageFilter languages={languages} />
        </Content>
        <Footer>
            <span>Developed by tiago.svo.dev</span>
        </Footer>
    </Container>)
}

export default Profile;