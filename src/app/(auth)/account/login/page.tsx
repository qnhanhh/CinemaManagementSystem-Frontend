"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/auth";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { loginFormSchema } from "@/types/schema";
import { LoginRequest } from "@/types";

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<LoginRequest>({
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate: login } = useMutation(
    (data: LoginRequest) => loginUser(data),
    {
      onSuccess: () => {
        router.push("/dashboard");
      },
      onError: (err: Error) => {
        toast({
          title: "Oh no something is wrong!",
          description: err.message,
        });
      },
    }
  );

  const onSubmit = (data: LoginRequest) => {
    login(data);
  };

  return (
    <div className="h-screen">
      <div className="relative top-1/2 -translate-y-1/2">
        <p className="text-white text-2xl text-center font-semibold">
          Welcome back to Muuvii
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col w-1/2 m-auto mt-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} required />
                  </FormControl>
                  <FormDescription>Please enter your email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormDescription>Please enter your password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-[#F36F45] hover:bg-[#e63f0c] hover:text-white text-black"
              type="submit"
            >
              Login
            </Button>
            <p className="text-white">
              Are you new here? &nbsp;
              <Link
                href="./register"
                className="text-blue-500 motion-safe:animate-pulse"
              >
                Register now
              </Link>
            </p>
          </form>
        </Form>
        <Toaster />
      </div>
    </div>
  );
}
