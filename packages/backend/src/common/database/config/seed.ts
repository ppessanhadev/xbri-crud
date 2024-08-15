import { CreateProductBody } from '@/modules/products/schemas/create-product.schema';

export const seed: CreateProductBody[] = [
  {
    name: 'FASTWAY A5 (175/75R13 84T)',
    quantity: 25,
    price: 219,
    image: 'https://cdn.pneufree.com.br/XBRI/images/ModelosPneu/XBRI-FASTWAY-A5-V2/550/23.jpg',
  },
  {
    name: 'SPORT PLUS 2 (205/55R16 94W)',
    quantity: 42,
    description:
      'O Sport Plus 2 da XBRI é a escolha ideal para quem busca esportividade. O pneu proporciona melhor frenagem em piso seco e molhado aliado a uma boa durabilidade. Mais performance, controle e segurança para seu veículo.',
    price: 339,
    image: 'https://cdn.pneufree.com.br/XBRI/images/ModelosPneu/XBRI-SPORT-PLUS-2/550/23.jpg',
  },
];
