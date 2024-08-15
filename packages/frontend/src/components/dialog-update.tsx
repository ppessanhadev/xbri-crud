'use client';

import { useState } from 'react';
import { PencilIcon, PlusIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateProduct, CreateProductSchema, UpdateProduct, UpdateProductSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { updateProduct } from '@/actions/update-product';

export function DialogUpdate(product: UpdateProduct) {
  const [open, setOpen] = useState<boolean>();

  const form = useForm<UpdateProduct>({
    resolver: zodResolver(UpdateProductSchema),
    defaultValues: {
      id: product.id,
      name: product.name ?? '',
      price: product.price ?? 0,
      quantity: product.quantity ?? 0,
      description: product?.description ?? '',
      image: product?.image ?? '',
    },
  });

  async function onSubmit(values: CreateProduct) {
    setOpen(false);
    await updateProduct(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <PencilIcon className="h-5 w-5 text-yellow-600" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Atualização de dados do produto</DialogTitle>
          <DialogDescription>Altere os campos abaixo.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do produto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade</FormLabel>
                  <FormControl>
                    <Input placeholder="Quantidade do produto" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <Input placeholder="Valor do produto" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagem</FormLabel>
                  <FormControl>
                    <Input placeholder="Exemplo: https://i.imgur.com/B4zqewK.jpeg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descrição do produto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="outline"
              className="w-full dark:border-yellow-500 dark:hover:bg-yellow-500 border-yellow-500 hover:border-yellow-500"
            >
              Alterar produto
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
