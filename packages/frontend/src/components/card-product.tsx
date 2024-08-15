import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardTitle, CardItem } from './ui/card';

export function CardProduct() {
  function formatter(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return (
    <Card className="p-4 min-w-[700px] items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>IMG</AvatarFallback>
      </Avatar>

      <CardContent>
        <CardTitle className="text-3xl">Produtito</CardTitle>

        <CardItem item="quantidade">33</CardItem>
        <CardItem item="preço">{formatter(37.5)}</CardItem>
        <CardItem item="descrição"> - </CardItem>
      </CardContent>
    </Card>
  );
}
