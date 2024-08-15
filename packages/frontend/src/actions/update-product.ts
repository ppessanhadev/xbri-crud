'use server'

import { revalidateTag } from "next/cache";
import { CreateProduct } from "@/lib/schemas";

export async function updateProduct(values: CreateProduct) {
  await fetch('http://localhost:3741/api/v1/products', {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(values),
  });
  revalidateTag('products-list');
}
