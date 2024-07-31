'use client';
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
import { X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { deleteUser } from '@/controllers/userController';

interface DialogDeleteUserProps {
  id: string;
}

const DialogDeleteUser: FC<DialogDeleteUserProps> = ({ id }) => {
  const { toast } = useToast();
  const router = useRouter();
  const onDelete = async (id: string) => {
    try {
      await deleteUser(id);
      toast({
        title: 'Success',
        description: 'Success, User has been deleted',
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Failed',
        description: 'Failed, Please try again!',
      });
      console.log(error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <X />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-auto max-w-[600px] max-h-[90%] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Delete a user. Click delete when you're done.
            </DialogDescription>
          </DialogHeader>
          <Button className="w-[25%]" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDeleteUser;
