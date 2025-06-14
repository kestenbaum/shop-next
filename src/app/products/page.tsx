import React from 'react';

import Link from 'next/link';

import { getAllProducts } from '@/lib/products';

const Page = () => {
  const products = getAllProducts();

  return (
    <div className="grid grid-cols-3 gap-4 pt-14 w-full">
      {products.map((product) => (
        <div className="flex flex-col items-center p-2.5 bg-amber-700 rounded-lg" key={product.id}>
          <span className="text-2xl text-bold text-amber-50">{product.name}</span>
          <Link className="text-sm text-white hover:text-amber-50" href={`/products/${product.id}`}>
            To product
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
