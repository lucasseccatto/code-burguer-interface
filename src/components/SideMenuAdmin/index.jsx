import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'
import { Link } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin() {
  const { logout } = useUser()

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={true}>
          <ListLink to={item.link}>
            <img src={item.icon} alt="icone" />
            {item.label}
          </ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffffff', marginRight: '8px' }} />
        <Link
          to="/login"
          onClick={logout}
          style={{ textDecoration: 'none', color: '#ffffff' }}
        >
          Sair
        </Link>
      </ItemContainer>
    </Container>
  )
}
