import React, { useState } from 'react';
import { Nav, CartButton, NavLogo, Logobrand, CartLogo, CartQuantity } from './Navbar';
import CartIcon from '../../assets/CartLogo.svg';
import { useSelector } from 'react-redux';


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state:any) => state.cart);

  function toggleShoppingMenu(){
    if(isOpen === false){
      let menu = document.getElementById("menu");
      menu?.classList.add('menu');

      setIsOpen(true);
    } else if(isOpen === true){
      let menu = document.getElementById("menu");
      menu?.classList.remove('menu');
      setIsOpen(false);
    }
  }
  return (
    <Nav>
      <NavLogo>
        MKS
        <Logobrand>
          Sistemas
        </Logobrand>
      </NavLogo>

      <CartButton onClick={() => toggleShoppingMenu()}>
        <CartLogo src={CartIcon} />
        <CartQuantity>{cart.cartTotalQuantity}</CartQuantity>
      </CartButton>
    </Nav>
  )
}