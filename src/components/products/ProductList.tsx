

import { useState } from 'react';
import ProductCard from "@/components/products/ProductCart";
import Pagination from "@/components/pagination/Pagination";
import { Product } from "@/types";

interface Props {
    products: Product[];
    productsPerPage?: number;
}

export default function ProductList({ products, productsPerPage = 10 }: Props) {
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <h1 className='text-3xl font-semibold mb-4'>Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
}