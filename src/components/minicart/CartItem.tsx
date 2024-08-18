"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";
import { useAppDispatch } from "@/store/hooks";
import { addQuantity, removeItem, removeQuantity } from "@/store/features/cart/cartSlice";

interface cartProps {
  id: number;
  src: string;
  productName: string;
  size?: string;
  price: number;
  quantity: number;
}

export const CartProductComp: React.FC<cartProps> = ({
  id,
  src,
  productName,
  price,
  size,
  quantity,
}) => {
  // const [quantity,setQuantity]=useState(1);
  // const handleDecrease=()=>{
  //   if (quantity<=0) return
  //   setQuantity(quantity-1)
  // }
  // const handleAdd=()=>{
  //   setQuantity(quantity+1)
  // }
  const dispatch = useAppDispatch();
  const handleDecrease = () => {
    dispatch(removeQuantity(id));
  };

  const handleIncrease = () => {
    dispatch(addQuantity(id));
  };

  return (
    <div className="flex gap-x-2">
      <div className="h-24 w-24 rounded-xl bg-[#F0EEED] relative">
        <Image
          src={src}
          alt={productName || "Product image"}
          layout="fill"
          className="rounded-xl object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div className="flex justify-between w-full">
          <h6 className="font-semibold text-sm">{productName}</h6>
          <button
		  onClick={()=>dispatch(removeItem(id))}
		  >
            <FaTrashAlt size={18} />
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="font-bold">₹{price}</h3>
          <div className="bg-[#F0F0F0] rounded-2xl w-20 px-2  flex items-center justify-between">
            <button onClick={handleDecrease} className="text-3xl">
              -
            </button>
            <p className="font-semibold">{quantity}</p>
            <button onClick={handleIncrease} className="text-xl">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
