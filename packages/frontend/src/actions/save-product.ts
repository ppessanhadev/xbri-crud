'use server'

import { revalidateTag } from "next/cache";
import { CreateProduct } from "@/lib/schemas";

export async function saveProduct(values: CreateProduct) {
  await fetch('http://localhost:3741/api/v1/products', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(values),
  });
  revalidateTag('products-list');
}
