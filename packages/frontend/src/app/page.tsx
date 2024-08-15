import { PlusIcon } from 'lucide-react';

import { CardProduct } from '@/components/card-product';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/Product';

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/v1/products');
  const data: Product[] = await response.json();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-8 md:px-44 dark:bg-zinc-950">
      <h1 className="text-5xl font-bold">
        CRUD
        <em>
          <span className="text-red-700">X</span>BRI
        </em>
      </h1>

      <Button
        variant="outline"
        className="self-end dark:border-green-700 dark:hover:bg-green-700 border-green-700 hover:border-green-700"
      >
        <PlusIcon className="w-4 h-4 mr-2" />
        Adicionar novo produto
      </Button>

      {data.map((product) => (
        <CardProduct {...product} key={product.id} />
      ))}
    </main>
  );
}
