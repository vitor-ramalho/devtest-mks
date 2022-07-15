import styled from 'styled-components';

export const CardsContainer = styled.div`
  max-width: 1000px;
  margin: 116px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NamePriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 8px #00000022;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImg = styled.img`
  max-width: 140px;
  max-height: 140px;
  margin: 0 auto;
  padding: 5px
`

export const ProductName = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2C2C2C;  
`

export const ProductDescription = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2C2C2C;
  padding: 5px;
`
export const ProductPrice = styled.h3`
 font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #FFFFFF;
  text-align: center;
  background-size: auto;
  background: #373737;
  border-radius: 5px;
  border: solid 4px #373737;
`

export const ProductButton = styled.button`
  background: #0F52BA;
  border: none;
  border-radius: 0px 0px 8px 8px;
  color: #fff;
  height: 31px;
  cursor: pointer;
`