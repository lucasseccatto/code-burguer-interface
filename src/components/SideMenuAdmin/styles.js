import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 15px;
  padding-left: 20px;
`

export const ListLink = styled(Link)`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  color: #fff;

  img {
    margin-right: 8px;
  }
`
