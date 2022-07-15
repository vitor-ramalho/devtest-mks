import React, { useState, useEffect } from 'react'
import { CloseButton, ShoppingCartContainer, ShoppingCartItemContainer, ShoppingCartTitle, ProductPhoto, RemoveProduct, ProductName, IncrementProduct, DecrementProduct, ProductCount, TotalPriceContainer, TotalPrice } from './ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals, removeFromCart } from '../../features/cartSlice';

const ShoppingCart = () => {
  const [open, setOpen] = useState(Boolean);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function closeShoppingMenu() {
    if (!open) {
      let menu = document.getElementById("menu");
      menu?.classList.add('menu');
      setOpen(true);
    } else if (open) {
      let menu = document.getElementById("menu");
      menu?.classList.remove('menu');
      setOpen(false);
    }
  };

  //Get methods from redux
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem))
  };

  useEffect(() => {
    dispatch(getTotals())
  })

  return (
    <ShoppingCartContainer id='menu'>
      <ShoppingCartTitle>
        Carrinho de Compras
      </ShoppingCartTitle>
      <CloseButton onClick={() => closeShoppingMenu()}>
        X
      </CloseButton>
      {cart.cartItems.lenght == 0 ? (
        <div>
          <p>Cart is empty bro</p>
        </div>
      ) : (
        <>
          {
            cart.cartItems?.map(cartItem => (
              <ShoppingCartItemContainer>
                <RemoveProduct
                  onClick={() => handleRemoveFromCart(cartItem)}
                >X</RemoveProduct>
                <ProductPhoto src={cartItem.photo} alt="" />
                <ProductName>{cartItem.name}</ProductName>
                <ProductCount>
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
  )
}

export default ShoppingCart