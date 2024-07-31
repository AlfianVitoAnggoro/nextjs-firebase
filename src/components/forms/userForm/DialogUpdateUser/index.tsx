import React, { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import UpdateUserForm from './UpdateUserForm';
import { Pencil } from 'lucide-react';
import { getUser } from '@/controllers/userController';

interface DialogUpdateUserProps {
  id: string;
}

const DialogUpdateUser: FC<DialogUpdateUserProps> = async ({ id }) => {
  const user = await getUser(id);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Pencil />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-auto max-w-[600px] max-h-[90%] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Update User</DialogTitle>
            <DialogDescription>
              Update a user. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <UpdateUserForm user={user} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogUpdateUser;
