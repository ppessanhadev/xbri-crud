'use client';

import { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateProduct, CreateProductSchema } from '@/lib/schemas';
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
import { saveProduct } from '@/actions/save-product';

export function DialogCreate() {
  const [open, setOpen] = useState<boolean>();

  const form = useForm<CreateProduct>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues: {
      name: '',
      price: 0,
      quantity: 0,
      description: '',
      image: '',
    },
  });

  async function onSubmit(values: CreateProduct) {
    setOpen(false);
    form.reset();

    await saveProduct(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="self-end dark:border-green-700 dark:hover:bg-green-700 border-green-700 hover:border-green-700"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Adicionar novo produto
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Criação de novo produto</DialogTitle>
          <DialogDescription>*Preencha os campos obrigatórios abaixo.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Produto*</FormLabel>
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
                  <FormLabel>Quantidade*</FormLabel>
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
                  <FormLabel>Preço*</FormLabel>
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
              className="w-full dark:border-green-700 dark:hover:bg-green-700 border-green-700 hover:border-green-700"
            >
              Criar produto
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
