'use client';

import { Product } from '@/types/Product';
import { CardActionButtons } from '@/components/card-action-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardTitle, CardItem } from '@/components/ui/card';

export function CardProduct({ id, name, price, quantity, description, image }: Product) {
  function formatter(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return (
    <Card className="p-4 w-full items-center">
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

      <CardActionButtons id={id} />
    </Card>
  );
}
