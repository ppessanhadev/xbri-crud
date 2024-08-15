'use server'

import { revalidateTag } from "next/cache";

export async function deleteProduct(id: string | number) {
  await fetch(`http://localhost:3741/api/v1/products/${id}`, { method: 'DELETE' });
  revalidateTag('products-list');
}
