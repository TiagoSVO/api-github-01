import React from 'react';
import { Avatar, Container, Content, Footer, Header, Name, Login } from './styles';
import ProfileInfos from '../ProfileInfos';
import LanguageFilter from '../LanguageFilter';

const Profile = ({ user }) => (
    <Container>
        <Header>
            <Avatar src={`${user.avatar_url}`} />
            <Login>{user.login}</Login>
            <Name>{user.name}</Name>
        </Header>
        <Content>
            <ProfileInfos user={user} />
            <LanguageFilter user={user} />
        </Content>
        <Footer>
            Footer
        </Footer>
    </Container>
)

export default Profile;