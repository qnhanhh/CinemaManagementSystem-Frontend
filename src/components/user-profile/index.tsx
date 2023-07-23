import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Dropdown from "./dropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editUser, getUserById } from "@/api/users";
import { EditUserType, UserType } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editUserSchema, userSchema } from "@/types/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import StateHandler, { States } from "../state-handler";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2Icon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { toast } from "../ui/use-toast";

export default function UserProfile() {
  const userId = localStorage.getItem("user-id") || "";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCurrentUser", userId],
    queryFn: () => getUserById(userId),
  });

  console.log("data", data);

  const form = useForm<EditUserType>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      firstname: data?.firstname || "",
      middleName: data?.middleName || "",
      lastname: data?.lastname || "",
      companyId: data?.companyId || "",
      birthDate: new Date(data?.birthDate || "1990-12-12"),
    },
  });

  const { mutate: update } = useMutation((data: EditUserType) => editUser(data), {
    onSuccess: (res) => {
      console.log("update success", res);
      // router.push("/account/login");
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
  });

  const onSubmit = () => {
    console.log(form.getValues());
    update(form.getValues());
  };

  if (isLoading) return <StateHandler state={States.Loading} />;

  return (
    <Dialog>
      <Dropdown />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 col-span-full"
            >
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder={data.firstname} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Middle name</FormLabel>
                    <FormControl>
                      <Input placeholder={data.middleName} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder={data.lastname} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyId"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder={data.companyId||'Please contact admin to edit your company'} disabled {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Birth of date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => date && field.onChange(date)}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && (
                  <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save changes
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
