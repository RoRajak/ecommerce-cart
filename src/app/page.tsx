"use client"
import ProductList from "@/components/products/ProductList";
import Header from "@/components/ui/Header";
import { fetchData } from "@/store/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";



export default function Home() {
  const {products,isLoading}=useAppSelector((state)=>state.product)
  const dispatch=useAppDispatch()
  useEffect(() => {
    
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="bg-zinc-100" >
			<Header />
			<main className='container mx-auto md:w-10/12 py-8 px-4'>
				{isLoading ? <div className='text-center text-lg'>Loading...</div> : <ProductList products={products}/>}
			</main>
		</div>
  );
}
