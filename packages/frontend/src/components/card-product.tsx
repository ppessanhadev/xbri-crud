import { PencilIcon, EraserIcon } from 'lucide-react';

import { Product } from '@/types/Product';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardTitle, CardItem } from '@/components/ui/card';

export function CardProduct({ name, price, quantity, description, image }: Product) {
  function formatter(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return (
    <Card className="p-4 w-[700px] items-center">
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>NO IMAGE</AvatarFallback>
      </Avatar>

      <CardContent>
        <CardTitle className="text-3xl">{name}</CardTitle>

        <CardItem item="quantidade">{quantity}</CardItem>
        <CardItem item="preço">{formatter(price)}</CardItem>
        <CardItem item="descrição">{description}</CardItem>
      </CardContent>

      <CardContent className="ml-auto flex flex-col gap-2">
        <Button variant="ghost" size="icon">
          <PencilIcon className="h-5 w-5 text-yellow-600" />
        </Button>

        <Button variant="ghost" size="icon">
          <EraserIcon className="h-5 w-5 text-red-600" />
        </Button>
      </CardContent>
    </Card>
  );
}
