import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-15">
      <Link href="/products">Products</Link>
    </div>
  );
}
