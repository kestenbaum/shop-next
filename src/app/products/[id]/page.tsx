import React from 'react';

import { getProductById } from '@/lib/products';

type Props = {
  params: { id: string; name: string };
};

export default async function Page({ params }: Props) {
  if (!params.id) {
    return <div> Product not find </div>;
  }
  const [product] = await Promise.all([getProductById(params.id)]);

  return (
    <div className="pt-15">
      <h1>{product?.name}</h1>
    </div>
  );
}
