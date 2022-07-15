import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

interface CartState {
  id: number,
  name: string,
  cartItems: any,
  cartQuantity: number,
  price: number,
  cartTotalQuantity: number,
  cartTotalAmount: number,
}

const localCartItems = localStorage.getItem("cartItems");

const initialState: CartState = {
  id: 0,
  name: '',
  cartItems: localCartItems ? JSON.parse(localCartItems) : [],
  cartQuantity: 0,
  price: 0,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Add to Cart method - it finds product index and increase its quantity. If there is no index in cart, it add new index product.
    addToCart(state, action: PayloadAction<CartState>) {
      const itemIndex = state.cartItems.findIndex((item: any) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`increased ${state.cartItems[itemIndex].name} cart quantity`, {
          position: "bottom-left"
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} Added to cart`, {
          position: "bottom-left"
        })
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    //remove from cart method - 
    removeFromCart(state, action: PayloadAction<CartState>) {
      const nextCartItems = state.cartItems.filter(
        (cartItem: CartState) => cartItem.id !== action.payload.id
      )

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`${action.payload.name} Removed from cart`, {
        position: "bottom-left"
      })
    },
    decreaseCart(state, action: PayloadAction<CartState>) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem: CartState) => cartItem.id === action.payload.id
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem: CartState) => cartItem.id !== action.payload.id
        )

        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      let {total, quantity} = state.cartItems.reduce((cartTotal: any, cartItem: CartState) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity

        return cartTotal;
      }, {
        total: 0,
        quantity: 0
      });

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
});

export const { addToCart, removeFromCart, decreaseCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;