import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, ProductImage, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  return (
    <Container>
      <ProductImage src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
