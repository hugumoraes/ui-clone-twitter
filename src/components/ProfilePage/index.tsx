import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

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
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>942 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
