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
import TextButton from "@/components/button/text-button";
import { CalendarIcon, Folder } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import CustomDropdown from "@/components/custom-dropdown";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export default function EditForm({ row }: { row?: Row<MovieType> }) {
  const editForm = useForm<MovieType>({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      title: row?.original.title || "Title",
      description: row?.original.description || "Description",
      ageRequired: row?.original.ageRequired || 14,
      releaseDate: new Date(row?.original.releaseDate || "1900-01-01"),
      status: row?.original.status || "Active",
    },
  });

  const onSubmit = () => {
    console.log(editForm.getValues());
  };

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Form {...editForm}>
        <form
          onSubmit={editForm.handleSubmit(onSubmit)}
          className="space-y-8 col-span-full"
        >
          <FormField
            control={editForm.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder={field.value} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={editForm.control}
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
          <FormField
            control={editForm.control}
            name="ageRequired"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Age required</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={field.value.toString()}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={editForm.control}
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
            control={editForm.control}
            name="status"
            render={() => (
              <FormItem className="flex flex-col">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <CustomDropdown initValue="Active" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <TextButton text="Save" icon={Folder} />
          </div>
        </form>
      </Form>
    </div>
  );
}
