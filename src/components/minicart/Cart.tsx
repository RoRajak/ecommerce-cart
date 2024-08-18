"use client"
import { useState } from "react";

import { CartProductComp } from "@/components/minicart/CartItem";
import { useAppSelector } from "@/store/hooks";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

function Cart() {
  const cart=useAppSelector((state)=>state.cart.items)
    const [promoCode, setPromoCode] = useState('');
    let total = 0
    if (cart) {
      total = cart.reduce((acc, product:Product) => acc + product.price * (product.quantity), 0)
    }
    const navigate=useRouter()
  
  const discountedPrice: number = parseFloat(((total * 15) / 100).toFixed(2));
  const deliveryFee: number = 15;
  return (
    <section className="flex flex-col p-4">
      <div>
        <button onClick={()=>navigate.push("/")} >Home</button>
        &gt;
        <button>Cart</button>
      </div>
      <h1 className="mt-4 font-bold text-xl">YOUR CART</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-x-10 mt-4 gap-4">
        <div className="flex flex-col gap-y-4 sm:w-1/3">
          {cart.map((item, i) => (
            <CartProductComp
            id={item.id}
              key={i}
              src={item.image}
              price={item.price}
              productName={item.title}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-bold">Order Summary</h1>
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm font-semibold">₹{total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between" >
              <p className="text-sm">Discount(15%)</p>
              <p className="text-sm font-semibold text-red-500">-₹{discountedPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Delivery fee</p>
              <p className="text-sm font-semibold">₹{deliveryFee}</p>
            </div>
            <span className="w-full block bg-gray-500"></span>
            <div className="flex justify-between">
              <p className="text-sm">Total</p>
              <p className="text-sm font-semibold">₹{(total + deliveryFee - discountedPrice).toFixed(2)}</p>
            </div>
            <div className="max-w-sm mx-auto p-4">
              <div className="flex items-center mb-4 border rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-grow p-2 outline-none"
                />
                <button className="bg-black text-white px-4 py-2">Apply</button>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg">
                Go to Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
