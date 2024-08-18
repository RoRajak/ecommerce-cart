import { Product } from "@/types";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export interface productState{
    products:Product [],
    isLoading:boolean,
    error:string | null
}
const initialState:productState={
    products:[],
    isLoading:false,
    error:null
}

export const fetchData=createAsyncThunk("fetchData",async()=>{
    try {
        const response =fetch("https://fakestoreapi.com/products");
        const data=(await response).json();
        return data;
    } catch (error) {
        throw Error("Error fetching data")
    }
});

const productSlice=createSlice({
    name:"data",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.products=action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.error=action.error.message||"failed to fetch the data"
        })
        
    }

})

export default productSlice.reducer