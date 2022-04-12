import React from 'react';

import { MdPeople, MdApartment, MdLink } from 'react-icons/md';

import { Container, FollowLabel, AddressLabel, BlogLinkLabel } from "./styles";

const ProfileInfos = ({ user }) => {
    return (
      <Container>
        <FollowLabel>
          <MdPeople size={20} />
          &nbsp;
          <span>
            {user.followers} Seguidores &#183; {user.following} Seguindo
          </span>
        </FollowLabel>
        <AddressLabel>
          <MdApartment size={20} />
          &nbsp;
          <span>{user.location}</span>
        </AddressLabel>
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