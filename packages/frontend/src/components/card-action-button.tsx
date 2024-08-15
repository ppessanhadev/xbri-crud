'use client';

import { useState } from 'react';
import { EraserIcon } from 'lucide-react';

import { Product } from '@/types/Product';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { deleteProduct } from '@/actions/delete-product';
import { LoadingSpinner } from '@/components/ui/loading';
import { DialogUpdate } from '@/components/dialog-update';

export function CardActionButtons(product: Product) {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleDelete() {
    setLoading(true);
    await deleteProduct(product.id);
    setLoading(false);
  }

  return (
    <CardContent className="ml-auto flex flex-col gap-2">
      {loading && <LoadingSpinner />}

      <DialogUpdate {...product} />

      <Button variant="ghost" size="icon" onClick={handleDelete}>
        <EraserIcon className="h-5 w-5 text-red-600" />
      </Button>
    </CardContent>
  );
}
