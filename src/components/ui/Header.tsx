

import { useAppSelector } from "@/store/hooks"
import { useRouter } from "next/navigation"
import { FiShoppingCart } from "react-icons/fi"




export default function Header() {
	const items=useAppSelector((state)=>state.cart.items)
	const navigate=useRouter()

	return (
		<header className='bg-gray-900 text-white py-4 flex items-center justify-between h-14 sticky top-0 z-10'>
			<nav className='container mx-auto md:w-10/12 px-4 flex justify-between'>
				<span className='text-lg font-semibold'>Rohit.Ro</span>
				<div className='relative'>
					<button
						type='button'
						title='Mini Cart'
						className='text-white text-xl flex items-center'
						onClick={()=>navigate.push("/cart")}
					>
						<FiShoppingCart />
						<div className='text-white rounded-full bg-blue-700 w-5 h-5 text-sm -ml-1'>{items.length}</div>
					</button>
				</div>
			</nav>
		</header>
	)
}