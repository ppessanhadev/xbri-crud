'use client';

import { EraserIcon, PencilIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { deleteProduct } from '@/actions/delete-product';
import { LoadingSpinner } from './ui/loading';
import { useState } from 'react';

export function CardActionButtons({ id }: { id: string | number }) {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleDelete() {
    setLoading(true);
    await deleteProduct(id);
    setLoading(false);
  }

  return (
    <CardContent className="ml-auto flex flex-col gap-2">
      {loading && <LoadingSpinner />}

      <Button variant="ghost" size="icon">
        <PencilIcon className="h-5 w-5 text-yellow-600" />
      </Button>

      <Button variant="ghost" size="icon" onClick={handleDelete}>
        <EraserIcon className="h-5 w-5 text-red-600" />
      </Button>
    </CardContent>
  );
}
