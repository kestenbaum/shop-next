interface IProducts {
  id: string;
  name: string;
}

const products: IProducts[] = [
  { id: '1', name: 'lalal' },
  { id: '2', name: 'lalal 2' },
  { id: '3', name: 'lalal 3' },
  { id: '4', name: 'lala 4' },
];

export function getAllProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}
