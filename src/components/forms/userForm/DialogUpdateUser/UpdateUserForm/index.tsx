'use client';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { userFormSchema } from '@/lib/form-schema';
import { useToast } from '@/components/ui/use-toast';
import { updateUser } from '@/controllers/userController';
import { userType } from '@/constants';
import { useRouter } from 'next/navigation';

interface UpdateUserFormProps {
  user: any;
}

const UpdateUserForm: FC<UpdateUserFormProps> = ({ user }) => {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      role: user?.role,
      password: user?.password,
      image: user?.image,
    },
  });

  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async (val: z.infer<typeof userFormSchema>) => {
    try {
      const body = {
        ...val,
      };

      await updateUser(user.id, body);

      toast({
        title: 'Success',
        description: 'Success, User has been updated',
      });

      router.refresh();
    } catch (error) {
      toast({
        title: 'Failed',
        description: 'Failed, Please try again',
      });
      console.log(error);
    }
  };
  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...form.register('name')}
                    placeholder="Name..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...form.register('email')}
                    placeholder="Email..."
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input
                    {...form.register('role')}
                    placeholder="Role..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...form.register('password')}
                    placeholder="Password..."
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateUserForm;
