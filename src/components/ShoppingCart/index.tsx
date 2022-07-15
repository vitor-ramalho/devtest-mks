import React, { useState, useEffect } from 'react'
import { CloseButton, ShoppingCartContainer, ShoppingCartItemContainer, ShoppingCartTitle, ProductPhoto, RemoveProduct, ProductName, IncrementProduct, DecrementProduct, ProductCount, TotalPriceContainer, TotalPrice, Qtd, EndBuy } from './ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals, removeFromCart } from '../../features/cartSlice';

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();


  function toggleShoppingMenu() {
    if (isOpen === false) {
      let menu = document.getElementById("menu");
      menu?.classList.add('menu');

      setIsOpen(true);
    } else if (isOpen === true) {
      let menu = document.getElementById("menu");
      menu?.classList.remove('menu');
      setIsOpen(false);
    }
  }

  //Get methods from redux
  const handleRemoveFromCart = (cartItem: any) => {
    dispatch(removeFromCart(cartItem))
  };

  const handleDecreaseCart = (cartItem: any) => {
    dispatch(decreaseCart(cartItem))
  };

  const handleIncreaseCart = (cartItem: any) => {
    dispatch(addToCart(cartItem))
  };

  useEffect(() => {
    dispatch(getTotals())
  })

  return (
    <div id='menu'>
      <ShoppingCartContainer>
        <ShoppingCartTitle>
          Carrinho de Compras
        </ShoppingCartTitle>
        <CloseButton onClick={() => toggleShoppingMenu()}>
          X
        </CloseButton>
        {cart.cartItems?.lenght == 0 ? (
          <ShoppingCartItemContainer>
            <ProductName>Cart is empty bro</ProductName>
          </ShoppingCartItemContainer>
        ) : (
          <>
            {
              cart.cartItems?.map((cartItem: any) => (
                <ShoppingCartItemContainer>
                  <RemoveProduct
                    onClick={() => handleRemoveFromCart(cartItem)}
                  >X</RemoveProduct>
                  <ProductPhoto src={cartItem.photo} alt="" />
                  <ProductName>{cartItem.name}</ProductName>
                  <ProductCount>
                    <Qtd>Qtd:</Qtd>
                    <DecrementProduct
                      onClick={() => handleDecreaseCart(cartItem)}
                    >-</DecrementProduct>
                    <div>| {cartItem.cartQuantity} |</div>
                    <IncrementProduct
                      onClick={() => handleIncreaseCart(cartItem)}
                    >+</IncrementProduct>
                  </ProductCount>
                  <p>{cartItem.price}</p>
                </ShoppingCartItemContainer>
              ))
            }

          </>
        )}
        <TotalPriceContainer>
          <TotalPrice>Total</TotalPrice>
          <TotalPrice>R${cart.cartTotalAmount}</TotalPrice>
        </TotalPriceContainer>
      </ShoppingCartContainer>
      <EndBuy>Finalizar Compra</EndBuy>
    </div>
  )
}

export default ShoppingCart