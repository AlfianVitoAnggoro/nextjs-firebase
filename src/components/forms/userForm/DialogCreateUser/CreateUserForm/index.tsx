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
import { createUser } from '@/controllers/userController';
import { useRouter } from 'next/navigation';

interface CreateUserFormProps {}

const CreateUserForm: FC<CreateUserFormProps> = ({}) => {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
  });

  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async (val: z.infer<typeof userFormSchema>) => {
    try {
      const body = {
        ...val,
      };

      await createUser(body);

      toast({
        title: 'Success',
        description: 'Success, User has been created',
      });

      form.reset({
        name: '',
        email: '',
        role: '',
        password: '',
        image: '',
      });

      router.refresh();
    } catch (error) {
      toast({
        title: 'Failed',
        description: 'Failed, Please try again',
      });
      form.reset({
        password: '',
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateUserForm;
