import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Hugo Moraes</h1>
        <h2>@hugumoraes</h2>

        <p>
          Developer at <a href="http://www.hugumoraes.com.br">@hugumoraes</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Curitiba, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 1 de julho de 1997
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>327</strong>
          </span>
          <span>
            <strong>516 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
