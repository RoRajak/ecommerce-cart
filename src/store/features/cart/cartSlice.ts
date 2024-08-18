import { Product } from "@/types";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  items: Product[];
}

const initialState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem:(state,action:PayloadAction<Product>)=>{
      const existingItem=state.items.find((item)=>item.id===action.payload.id)
      if (existingItem) {
        existingItem.quantity+=1;
      }else{
        state.items.push({...action.payload,quantity:1})
      }
    },
    removeItem:(state,action)=>{
      state.items=state.items.filter((item)=>item.id!=action.payload)
      
    },
    addQuantity:(state,action:PayloadAction<number>)=>{
      const item=state.items.find((item)=>item.id===action.payload)
      if (item) {
        item.quantity+=1
      }
    },
    removeQuantity:(state,action:PayloadAction<number>)=>{
      const item=state.items.find((item)=>item.id===action.payload)
      if (item&&item.quantity>0) {
        item.quantity-=1
      }
    }
    

  },
});


export const {addItem,removeItem,addQuantity,removeQuantity}=cartSlice.actions
export default cartSlice.reducer