import styled from 'styled-components';

export const ShoppingCartContainer = styled.aside`
  height: 728px;
  width: 486px;
  right: 0;
  position: absolute;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #0F52BA;
  padding: 36px 47px;
  top: 0;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const ShoppingCartTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: #FFFFFF;
  max-width: 150px;
`

export const ShoppingCartItemContainer = styled.div`
  max-width: 379px;
  height: 100%;
  max-height: 95px;
  background: #fff;
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  margin-top: 28px;
  justify-content: space-between;
  position: relative;
`
export const CloseButton = styled.button`
  width: 38px;
  height: 38px;
  background: #000;
  border-radius: 100%;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  display: block;
  position: absolute;
  left: 80.83%;
  right: 1.53%;
  top: 3.81%;
  bottom: 92.48%;
`;

export const ProductPhoto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`
export const ProductName = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
`;

export const ProductPrice = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
`;

export const RemoveProduct = styled.button`
  width: 18px;
  height: 18px;
  background: #000;
  border-radius: 100%;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  display: block;
  position: absolute;
  top: -5px;
  right: -6px;
`

export const IncrementProduct = styled.button`
  background: #FFFFFF;
  border: none;
  padding: 8px;
  cursor: pointer;
`

export const DecrementProduct = styled.button`
  background: #FFFFFF;
  border: none;
  padding: 8px;
  cursor: pointer;
`

export const ProductCount = styled.div`
  background: #FFFFFF;
  border: 0.3px solid #BFBFBF;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
`

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TotalPrice = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #FFFFFF;
`

export const Qtd = styled.span`
  position: absolute;
  top: -8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 5px;
  line-height: 6px;
  color: #000000;
`

export const EndBuy = styled.button`
  width: 486px;
  height: 97px;
  background: #000000;
  border: none;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: white;
  float: right;
  margin-top: -120px;
`;