import { createActor, deleteActor, getActors } from "@/api/actors";
import { createGenre, deleteGenre, getGenres } from "@/api/genres";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import {
  ActorType,
  CompanyType,
  CreateActorType,
  CreateCompanyType,
  CreateGenreType,
} from "@/types";
import {
  createActorSchema,
  createCompanySchema,
  createGenreSchema,
} from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon, Loader2Icon, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import StateHandler, { States } from "@/components/state-handler";
import { useState } from "react";
import Link from "next/link";
import { createCompany, deleteCompany, getCompanies } from "@/api/companies";
import { splitDate } from "@/utils/function";

export default function AdminFunctions() {
  const [table, setTable] = useState("");

  const handleScroll = (table: string, id: string) => {
    const element = document.getElementById(id);
    setTable(table);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const actorForm = useForm<CreateActorType>({
    resolver: zodResolver(createActorSchema),
    defaultValues: {
      name: "",
      description: "",
      birthDate: new Date(),
      gender: "",
    },
  });

  const actorQuery = useQuery({
    queryKey: ["getAllActors"],
    queryFn: () => getActors(),
  });

  const actorDelete = useMutation((id: string) => deleteActor(id), {
    onSuccess: () => {
      toast({
        title: "Delete actor successfully!",
      });
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

  const actorMutation = useMutation(
    (data: CreateActorType) => createActor(data),
    {
      onSuccess: () => {
        toast({
          title: "Create actor successfully!",
        });
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

  const actorFormSubmit = () => {
    console.log(actorForm.getValues());
    actorMutation.mutate(actorForm.getValues());
  };

  const genreForm = useForm<CreateGenreType>({
    resolver: zodResolver(createGenreSchema),
    defaultValues: {
      name: "",
    },
  });

  const genreQuery = useQuery({
    queryKey: ["getAllGenres"],
    queryFn: () => getGenres(),
  });

  const genreDelete = useMutation((id: string) => deleteGenre(id), {
    onSuccess: () => {
      toast({
        title: "Delete genre successfully!",
      });
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

  const genreMutation = useMutation(
    (data: CreateGenreType) => createGenre(data),
    {
      onSuccess: () => {
        toast({
          title: "Create genre successfully!",
        });
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

  const genreFormSubmit = () => {
    console.log(genreForm.getValues());
    genreMutation.mutate(genreForm.getValues());
  };

  const companyForm = useForm<CreateCompanyType>({
    resolver: zodResolver(createCompanySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const companyQuery = useQuery({
    queryKey: ["getAllCompanies"],
    queryFn: () => getCompanies(),
  });

  const companyDelete = useMutation((id: string) => deleteCompany(id), {
    onSuccess: () => {
      toast({
        title: "Delete company successfully!",
      });
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

  const companyMutation = useMutation(
    (data: CreateCompanyType) => createCompany(data),
    {
      onSuccess: () => {
        toast({
          title: "Create company successfully!",
        });
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

  const companyFormSubmit = () => {
    console.log(companyForm.getValues());
    companyMutation.mutate(companyForm.getValues());
  };

  if (actorQuery.isLoading || genreQuery.isLoading || companyQuery.isLoading)
    return <StateHandler state={States.Loading} />;

  return (
    <TabsContent value="functions">
      <div className="flex justify-between gap-5">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Add actor</CardTitle>
            <CardDescription
              className="cursor-pointer text-center border border-slate-400 p-4 rounded-xl"
              onClick={() => handleScroll("actor", "actorList")}
            >
              View actors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...actorForm}>
              <form
                onSubmit={actorForm.handleSubmit(actorFormSubmit)}
                className="space-y-8 col-span-full"
              >
                <FormField
                  control={actorForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Actor name</FormLabel>
                      <FormControl>
                        <Input required placeholder={field.value} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={actorForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          required
                          placeholder={field.value}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={actorForm.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Birth date</FormLabel>
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
                          <PopoverContent
                            className="w-auto p-0 bg-black text-white"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(date) => date && field.onChange(date)}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
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
                <FormField
                  control={actorForm.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup
                          required
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Male" />
                            </FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Female" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Female
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="Other" />
                            </FormControl>
                            <FormLabel className="font-normal">Other</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={actorMutation.isLoading}
                >
                  {actorMutation.isLoading && (
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Save changes
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Add genre</CardTitle>
            <CardDescription
              className="cursor-pointer text-center border border-slate-400 p-4 rounded-xl"
              onClick={() => handleScroll("genre", "genreList")}
            >
              View genres
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...genreForm}>
              <form
                onSubmit={genreForm.handleSubmit(genreFormSubmit)}
                className="space-y-8 col-span-full"
              >
                <FormField
                  control={genreForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Genre name</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={genreMutation.isLoading}
                >
                  {genreMutation.isLoading && (
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Save changes
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Add company</CardTitle>
            <CardDescription
              className="cursor-pointer text-center border border-slate-400 p-4 rounded-xl"
              onClick={() => handleScroll("company", "companyList")}
            >
              View companies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...companyForm}>
              <form
                onSubmit={companyForm.handleSubmit(companyFormSubmit)}
                className="space-y-8 col-span-full"
              >
                <FormField
                  control={companyForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Company name</FormLabel>
                      <FormControl>
                        <Input placeholder={field.value} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={companyForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder={field.value} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={companyMutation.isLoading}
                >
                  {companyMutation.isLoading && (
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Save changes
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      {table == "actor" ? (
        <div id="actorList">
          <p className="text-white text-2xl font-semibold mt-4">
            All actors in the system
          </p>
          <Table className="text-white">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Birthdate</TableHead>
                <TableHead>Gender</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {actorQuery.data.map((item: ActorType) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    {splitDate(item.birthDate)}
                  </TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>
                    <Trash
                      className="cursor-pointer"
                      onClick={() => actorDelete.mutate(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : table == "genre" ? (
        <div id="genreList">
          <p className="text-white text-2xl font-semibold mt-4">
            All genres in the system
          </p>
          <Table className="text-white">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {genreQuery.data.map((item: ActorType) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Trash
                      className="cursor-pointer"
                      onClick={() => genreDelete.mutate(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div id="companyList">
          <p className="text-white text-2xl font-semibold mt-4">
            All companies in the system
          </p>
          <Table className="text-white">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {companyQuery.data.map((item: CompanyType) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>
                    <Trash
                      className="cursor-pointer"
                      onClick={() => companyDelete.mutate(item.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Toaster />
    </TabsContent>
  );
}
