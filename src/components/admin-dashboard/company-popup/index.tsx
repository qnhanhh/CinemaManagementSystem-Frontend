import { getCompanies } from "@/api/companies";
import { editUser } from "@/api/users";
import StateHandler, { States } from "@/components/state-handler";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { CompanyType, EditUserType, UserType } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function CompanyPopup({ user }: { user: UserType }) {
  const [company, setCompany] = useState("");

  const companies = useQuery({
    queryKey: ["getAllCompanies"],
    queryFn: () => getCompanies(),
  });

  const userMutation = useMutation((data: EditUserType) => editUser(data), {
    onSuccess: () => {
      toast({
        title: "Update user successfully!",
      });
      window.location.reload();
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
    const newUser = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      middleName: user.middleName,
      birthDate: user.birthDate,
      companyId: company,
    };
    console.log(newUser);
    userMutation.mutate(newUser);
  };

  if (companies.isLoading) return <StateHandler state={States.Loading} />;

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>List of companies</DialogTitle>
        <DialogDescription>
          <RadioGroup onValueChange={(e) => setCompany(e)}>
            {companies.data.map((item: CompanyType) => (
              <div key={item.id} className="flex items-center space-x-2 my-2">
                <RadioGroupItem value={item.id} id={item.id} />
                <Label htmlFor={item.id}>{item.name}</Label>
              </div>
            ))}
          </RadioGroup>
          <Button className="mt-2 w-full" onClick={onSubmit}>
            Save
          </Button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
