import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import Notifications from '~/components/Notifications'

import logo from '~/assets/logoRoxa.svg'

function Header() {
  return(
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber"/>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>
                name
              </strong>
              <Link to="/profile">Profile</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Avatar"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
