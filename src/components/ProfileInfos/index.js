import React from 'react';

import { MdPeople, MdApartment, MdLink } from 'react-icons/md';

import { Container, FollowLabel, AddressLabel, BlogLinkLabel } from "./styles";

const ProfileInfos = ({ user }) => {
    return (
      <Container>
        <FollowLabel>
          <MdPeople />
          &nbsp;
          <span>
            {user.followers} Seguidores * {user.following} Seguindo
          </span>
        </FollowLabel>
        <AddressLabel>
          <MdApartment />
          &nbsp;
          <span>{user.location}</span>
        </AddressLabel>
        <BlogLinkLabel>
          <MdLink />
          &nbsp;
          <span>{user.blog}</span>
        </BlogLinkLabel>
      </Container>
    );
}

export default ProfileInfos;