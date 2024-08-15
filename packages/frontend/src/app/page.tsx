import { CardProduct } from '@/components/card-product';
import { Product } from '@/types/Product';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/v1/products');
  const data: Product[] = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-8 dark:bg-zinc-950">
      <h1 className="text-5xl font-bold">
        CRUD
        <em>
          <span className="text-red-700">X</span>BRI
        </em>
      </h1>

      {data.map((product) => (
        <CardProduct {...product} key={product.id} />
      ))}
    </main>
  );
}
