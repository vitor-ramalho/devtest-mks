import React, { useState } from 'react';
import { Nav, CartButton, NavLogo, Logobrand, CartLogo, } from './Navbar';
import CartIcon from '../../assets/CartLogo.svg'

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  function closeShoppingMenu(){
    if(open === false){
      let menu = document.getElementById("menu");
      menu?.classList.add('menu');

      setOpen(true);
    } else if(open === true){
      let menu = document.getElementById("menu");
      menu?.classList.remove('menu');
      setOpen(false);
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

      <CartButton onClick={() => closeShoppingMenu()}>
        <CartLogo src={CartIcon} />
      </CartButton>
    </Nav>
  )
}