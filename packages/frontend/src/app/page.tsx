import { CardProduct } from '@/components/card-product';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-8 dark:bg-zinc-950">
      <h1 className="text-5xl font-bold">
        CRUD
        <em>
          <span className="text-red-700">X</span>BRI
        </em>
      </h1>
      <CardProduct />
    </main>
  );
}
