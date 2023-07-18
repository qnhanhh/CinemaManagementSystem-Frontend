"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { RegisterRequest } from "@/types";
import { registerFormSchema } from "@/types/schema";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/api/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<RegisterRequest>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    },
  });

  const { mutate: register } = useMutation(
    (data: RegisterRequest) => registerUser(data),
    {
      onSuccess: (res) => {
        console.log("register success", res);
        // router.push("/home");
      },
      onError: (err: any) => {
        let errMessage = "";
        if (err.response) {
          errMessage = err.response.data["ErrorMessage"];
        } else if (err.request) {
          errMessage = err.request["responseText"];
        } else {
          console.log("err", err.message);
          errMessage = "Please try again!";
        }
        console.log(err.config);
        toast({
          title: "Oh no something is wrong!",
          description: errMessage,
        });
      },
    }
  );

  const onSubmit = (values: RegisterRequest) => {
    register(values);
  };

  return (
    <div className="h-screen">
      <div className="relative top-1/2 -translate-y-1/2">
        <p className="text-white text-2xl text-center font-semibold">
          Muuvii is glad that YOU are here 🎉🎉
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col w-1/2 m-auto mt-4"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">First name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Middle name</FormLabel>
                  <FormControl>
                    <Input placeholder="Middle name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
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
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                    
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-[#F36F45] hover:bg-[#e63f0c] hover:text-white text-black"
              type="submit"
            >
              Register
            </Button>
            <p className="text-white">
              Already have your account? &nbsp;
              <Link
                href="./login"
                className="text-blue-500 motion-safe:animate-pulse"
              >
                Login now
              </Link>
            </p>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
}
