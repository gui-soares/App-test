import React from 'react';
import PropTypes from 'prop-types';

import {Container, Avatar, Name, Repos, Wrapper} from './styles';

export default function UserCard({user}) {
  return (
    <Container>
      <Avatar source={{uri: user.avatar_url}} />
      <Wrapper>
        <Name>{user.name}</Name>
        <Repos>{user.public_repos} repositórios</Repos>
      </Wrapper>
    </Container>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({}).isRequired,
};
