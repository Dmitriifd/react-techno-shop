import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
import { Paginate } from '@components/shared/Paginate';
import { Button } from '@components/ui/button';
import { Section } from '@components/ui/section';
import { useProductStore } from '@store/useProductStore';

export const SERVER_URL = 'http://localhost:5000';

const ProductListPage = () => {
  const { products, fetchProducts, deleteProduct, clearProducts, page, pages } = useProductStore((state) => state);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    fetchProducts(id);

    return () => {
      clearProducts();
    };
  }, [fetchProducts, clearProducts, id]);

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
  };

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
          {products?.map((product) => (
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
                <Link to={`/admin/product/${product._id}/edit`}>
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
                      <AlertDialogAction onClick={() => handleDeleteProduct(product._id)}>Удалить</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Paginate page={page} pages={pages} />
    </Section>
  );
};

export { ProductListPage };
