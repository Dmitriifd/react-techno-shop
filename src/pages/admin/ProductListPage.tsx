import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import RemoveIcon from '@assets/icons/delete.svg?react';
import EditIcon from '@assets/icons/edit.svg?react';
import PlusIcon from '@assets/icons/plus.svg?react';
import { Button } from '@components/ui/button';
import { Section } from '@components/ui/section';
import { ProductService } from '@services/profuct.service';
import { Product } from 'types/product';

const SERVER_URL = 'http://localhost:5000';

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getProducts()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Section>
      <div className="flex justify-between mb-10">
        <h1 className="text-3xl font-bold">Товары</h1>
        <Link to={`/admin/product/add`}>
          <Button variant="base">
            <PlusIcon fill="white" className="mr-2" />
            Добавить товар
          </Button>
        </Link>
      </div>

      <Table className="min-w-[740px]">
        <TableHeader>
          <TableRow className="text-base">
            <TableHead className="w-[100px] font-bold">ID</TableHead>
            <TableHead className="font-bold">Название</TableHead>
            <TableHead className="font-bold">Цена</TableHead>
            <TableHead className="text-right font-bold">Категория</TableHead>
            <TableHead className="text-right font-bold">Бренд</TableHead>
            <TableHead className="text-right font-bold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id} className="even:bg-gray-100">
              <TableCell>{product._id}</TableCell>
              <TableCell className="flex gap-1 items-center">
                <img src={`${SERVER_URL}${product.image}`} width={30} height={30} alt="" />
                {product.name}
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell className="text-right">{product.category}</TableCell>
              <TableCell className="text-right">{product.brand}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Link to={`/admin/product/1/edit`}>
                  <Button>
                    <EditIcon />
                  </Button>
                </Link>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>
                      <RemoveIcon />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Вы уверены, что хотите удалить товар?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Это действие нельзя отменить. Это приведет к окончательному удалению товара с наших серверов.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Отмена</AlertDialogCancel>
                      <AlertDialogAction>Удалить</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};

export { ProductListPage };
