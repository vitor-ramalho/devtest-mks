import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';

import { useGetAllProductsQuery } from '../../features/productsApi';

import { CardsContainer, Card, ProductImg, ProductButton, ProductDescription, ProductName, ProductPrice, NamePriceContainer } from './ProductList';

export const ProductList = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  //Get addToCart method from redux
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product))
  }

  return (
    <CardsContainer>
      {
        isLoading ? <p>Loading....</p> : error ? <p>An error occurred in the API</p> :
          <>
            {data?.products.map((product: any) =>
              <Card key={product.id}>
                <ProductImg src={product.photo} alt={product.brand} />

                <NamePriceContainer>
                  <ProductName>
                    {product.name}
                  </ProductName>
                  <ProductPrice>
                    R${product.price}
                  </ProductPrice>
                </NamePriceContainer>

                <ProductDescription>
                  {product.description}
                </ProductDescription>
                
                <ProductButton
                  onClick={() => handleAddToCart(product)}
                >
                  Comprar
                </ProductButton>
              </Card>
            )}
          </>
      }
    </CardsContainer>
  )
}
