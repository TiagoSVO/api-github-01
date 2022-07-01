import React from 'react';

import { MdGroup, MdLocationCity, MdLink, MdWork } from 'react-icons/md';

import { Container, FollowLabel, AddressLabel, LoginLabel, BlogLinkLabel } from "./styles";

const ProfileInfos = ({ user }) => {
    return (
      <Container>
        <FollowLabel>
          <MdGroup size={20} />
          &nbsp;
          <span>
            {user.followers} Seguidores &#183; {user.following} Seguindo
          </span>
        </FollowLabel>
        <AddressLabel>
          <MdLocationCity size={20} />
          &nbsp;
          <span>{user.location}</span>
        </AddressLabel>
        <LoginLabel>
          <MdWork size={20} />
          &nbsp;
          <span>{user.login}</span>
        </LoginLabel>
        <BlogLinkLabel>
          <MdLink size={20} />
          &nbsp;
          {user.blog ? (
            <a href={user.blog}>{user.blog}</a>
          ) : (
            <i>Não dispovível</i>
          )}
        </BlogLinkLabel>
      </Container>
    );
}

export default ProfileInfos;