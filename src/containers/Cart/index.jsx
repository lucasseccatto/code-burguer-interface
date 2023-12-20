import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems } from '../../components'
import { Container, CartImage } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={CartLogo} alt="logo do carrinho" />
      <CartItems />
    </Container>
  )
}
