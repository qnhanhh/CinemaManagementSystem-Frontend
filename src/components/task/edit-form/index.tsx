import { Input } from "@/components/ui/input";
import { MovieType } from "@/types";
import { movieSchema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Row } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Check, ChevronsUpDown, Loader2Icon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { activeStatus } from "../data/data";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { editMovie } from "@/api/movies";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";

export default function EditForm({ row }: { row: Row<MovieType> }) {
  const form = useForm<MovieType>({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      id: row.original.id,
      title: row.original.title,
      description: row.original.description,
      imageUrl: row.original.imageUrl,
      backDropUrl: row.original.backDropUrl,
      ageRequired: row.original.ageRequired,
      releaseDate: new Date(row.original.releaseDate),
      status: row.original.status,
    },
  });

  const { register } = form;

  const { mutate: update, isLoading } = useMutation(
    (data: MovieType) => editMovie(data),
    {
      onSuccess: (res) => {
        console.log("res", res);
        toast({
          title: "Update movie successfully!",
          description: `You have just updated the movie: ${row.original.title}`,
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

  const onSubmit = (values: MovieType) => {
    console.log("values", values);
    update(values);
  };

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 col-span-full"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder={row?.original.title} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={row?.original.description}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ageRequired"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Age required</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={18}
                    placeholder={row?.original.ageRequired.toString()}
                    {...register("ageRequired", { valueAsNumber: true })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="releaseDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Release date</FormLabel>
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
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Status</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? activeStatus.find(
                              (status) =>
                                status.value.toLowerCase() ==
                                field.value.toLowerCase()
                            )?.label
                          : "Select status"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search status..." />
                      <CommandEmpty>No status found.</CommandEmpty>
                      <CommandGroup>
                        {activeStatus.map((status) => (
                          <CommandItem
                            value={status.value}
                            key={status.value}
                            onSelect={(value) => {
                              form.setValue("status", value);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                status.value.toLowerCase() ==
                                  field.value.toLowerCase()
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {status.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
            Save changes
          </Button>
        </form>
      </Form>
    </div>
  );
}
