import React, { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CreateUserForm from '@/components/forms/userForm/DialogCreateUser/CreateUserForm';

interface DialogCreateUserProps {}

const DialogCreateUser: FC<DialogCreateUserProps> = ({}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" className="bg-primary">
            Create
          </Button>
        </DialogTrigger>
        <DialogContent className="w-auto max-w-[600px] max-h-[90%] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
            <DialogDescription>
              Create a new user. Click submit when you're done.
            </DialogDescription>
          </DialogHeader>
          <CreateUserForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogCreateUser;
