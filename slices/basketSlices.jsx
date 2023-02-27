import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
        const index = state.items.findIndex(
            (basketItems) => basketItems.id === action.payload.id
          );
    
          let newBasket = [...state.items];
    
          if (index >= 0) {
            // The item exists in the basket
            newBasket.splice(index, 1);
          }
    
          state.items = newBasket;
        },
      },
    });

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
