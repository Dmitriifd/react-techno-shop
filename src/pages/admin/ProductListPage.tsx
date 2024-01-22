import { Link } from 'react-router-dom';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import RemoveIcon from '@assets/icons/delete.svg?react';
import EditIcon from '@assets/icons/edit.svg?react';
import PlusIcon from '@assets/icons/plus.svg?react';
import { Button } from '@components/ui/button';
import { Section } from '@components/ui/section';

const products = [
  {
    id: '1',
    name: 'iPhone 13 Pro 256GB',
    price: '64500',
    category: 'Смартфоны',
    brand: 'Apple',
  },
  {
    id: '2',
    name: 'Xiaomi redmi note 15 128GB',
    price: '24500',
    category: 'Смартфоны',
    brand: 'Xiaomi',
  },
  {
    id: '3',
    name: 'Samsung S22 Ultra 256GB',
    price: '79000',
    category: 'Смартфоны',
    brand: 'Samsung',
  },
  {
    id: '4',
    name: 'Samsung gallaxy s22 Ultra 256GB',
    price: '79000',
    category: 'Смартфоны',
    brand: 'Samsung',
  },
];

const ProductListPage = () => {
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

      <Table>
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
            <TableRow key={product.id} className="even:bg-gray-100">
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell className="text-right">{product.category}</TableCell>
              <TableCell className="text-right">{product.brand}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Link to={`/admin/product/1/edit`}>
                  <Button>
                    <EditIcon />
                  </Button>
                </Link>

                <Button>
                  <RemoveIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};

export { ProductListPage };
