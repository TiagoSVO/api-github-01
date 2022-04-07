import React from 'react';
import { Avatar, Container, Content, Footer, Header, Name, Login } from './styles'

const Profile = ({ user }) => (
    <Container>
        <Header>
            <Avatar src={`${user.avatar_url}`} />
            <Login>{user.login}</Login>
            <Name>{user.name}</Name>
        </Header>
        <Content>
            <ProfileInfos>

            </ProfileInfos>
            <LanguageFilter>
                
            </LanguageFilter>
        </Content>
        <Footer>
            Footer
        </Footer>
    </Container>
)

export default Profile;