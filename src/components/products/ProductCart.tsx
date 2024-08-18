import Image from "next/image"



import { Product } from "@/types"
import { useAppDispatch } from "@/store/hooks"
import { addItem } from "@/store/features/cart/cartSlice"

interface Props {
	product: Product
}

export default function ProductCard({ product }: Props) {
	const dispatch=useAppDispatch()
	

	return (
		<div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col justify-between p-4 '>
			<Image
				src={product.image}
				alt={product.title}
				width={100}
				height={100}
				className='object-contain w-full h-40'
			/>
			<div className='flex-1 flex flex-col justify-between'>
				<h2 className='text-lg font-semibold'>{product.title}</h2>
				<p className='text-gray-600 flex-1'>{product.description.length>50?product.description.slice(0,50)+"....":product.description}</p>
				<div className='mt-4 flex items-center justify-between'>
					<span className='text-gray-800 font-semibold'>₹{product.price.toFixed(2)}</span>
					<button
						type='button'
						className='ml-2 bg-black text-white font-semibold py-2 px-4 rounded hover:bg-slate-700'
						onClick={()=>dispatch(addItem(product))}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}