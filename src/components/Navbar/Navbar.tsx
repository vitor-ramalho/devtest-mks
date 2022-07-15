import styled from 'styled-components';


export const Nav = styled.nav`
  background: #0F52BA ;
  height: 101px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 35px;
  align-items: center;
`

export const CartButton = styled.button`
  background: white;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
`;

export const NavLogo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 40px;
  line-height: 19px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
`;

export const Logobrand = styled.p`
  font-size: 20px;
  line-height: 19px;
  font-weight: 300;
  margin-top: 5px;
`;

export const CartLogo = styled.img`
    width: 19px;
    height: 18px;
`

export const CartQuantity = styled.p`
  font-weight: bold;
`;