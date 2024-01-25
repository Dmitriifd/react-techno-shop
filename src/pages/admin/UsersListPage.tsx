import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Section } from '@components/ui/section';

const users = [
  {
    id: '1',
    name: 'Admin',
    email: 'ad@ad.ru',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Николай',
    email: 'user@ad.ru',
    role: 'User',
  },
];

const UsersListPage = () => {
  return (
    <Section>
      <h1 className="text-3xl font-bold mb-10">Пользователи</h1>

      <Table className="min-w-[550px]">
        <TableHeader>
          <TableRow className="text-base">
            <TableHead className="w-[100px] font-bold">ID</TableHead>
            <TableHead className="font-bold">Имя</TableHead>
            <TableHead className="font-bold">Email</TableHead>
            <TableHead className="text-right font-bold">Роль</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="even:bg-gray-100">
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};

export { UsersListPage };
