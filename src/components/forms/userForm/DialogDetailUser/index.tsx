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
import { Eye } from 'lucide-react';
import { getUser } from '@/controllers/userController';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface DialogDetailUserProps {
  id: string;
}

const DialogDetailUser: FC<DialogDetailUserProps> = async ({ id }) => {
  const user = await getUser(id);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Eye />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-auto max-w-[600px] max-h-[90%] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detail User</DialogTitle>
            <DialogDescription>
              Detail a user. Click close when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-y-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex justify-start gap-x-2">
              <div>Name</div>
              <span>:</span>
              <div className="flex-1">{user?.name}</div>
            </div>
            <div className="flex justify-start gap-x-2">
              <div>Email</div>
              <span>:</span>
              <div className="flex-1">{user?.email}</div>
            </div>
            <div className="flex justify-start gap-x-2">
              <div>Role</div>
              <span>:</span>
              <div className="flex-1">{user?.role}</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogDetailUser;
