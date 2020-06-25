import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Container, Content, Profile } from './styles';
import Notifications from '~/components/Notifications'

import logo from '~/assets/logoRoxa.svg'

function Header() {
  const profile = useSelector(state => state.user.profile)
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
              <strong>{profile.name}</strong>
              <Link to="/profile">Profile</Link>
            </div>
            <img src={ profile.avatar ? profile.avatar.url : "https://api.adorable.io/avatars/50/abott@adorable.png" } alt="Avatar"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
