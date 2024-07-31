import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TitleMenu from '@/components/elements/TitleMenu';
import NavigationPanel from '@/components/fragments/NavigationPanel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getUsers } from '@/controllers/userController';
import DialogCreateUser from '@/components/forms/userForm/DialogCreateUser';
import DialogUpdateUser from '@/components/forms/userForm/DialogUpdateUser';
import DialogDetailUser from '@/components/forms/userForm/DialogDetailUser';
import DialogDeleteUser from '@/components/forms/userForm/DialogDeleteUser';

export default async function DashboardPages() {
  const navPanel = [
    {
      name: 'Home',
      href: '/dashboard',
    },
    {
      name: 'Users',
      href: '/users',
    },
  ];

  const users = await getUsers();
  return (
    <div>
      <TitleMenu title="Users" />
      <NavigationPanel pages={navPanel} />
      <div className="py-5 space-y-5">
        <div>
          <DialogCreateUser />
        </div>

        <div>
          <Table>
            <TableCaption>A list of your recent users.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Roles</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((item: any, i: number) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>
                    <DialogDetailUser id={item.id} />
                    <DialogUpdateUser id={item.id} />
                    <DialogDeleteUser id={item.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
