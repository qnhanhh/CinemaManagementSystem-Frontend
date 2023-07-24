import { getUsers } from "@/api/users";
import CompanyPopup from "@/components/admin-dashboard/company-popup";
import StateHandler, { States } from "@/components/state-handler";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { UserType } from "@/types";
import { splitDate } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";

export default function AdminUsers() {
  const users = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: () => getUsers(),
  });

  if (users.isLoading) return <StateHandler state={States.Loading} />;

  return (
    <TabsContent value="users" className="space-y-4">
      <Table className="text-white">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>First name</TableHead>
            <TableHead>Middle name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>Date of birth</TableHead>
            <TableHead>Company</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.data.map((item: UserType) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.firstname}</TableCell>
              <TableCell>{item.middleName}</TableCell>
              <TableCell>{item.lastname}</TableCell>
              <TableCell>{splitDate(item.birthDate)}</TableCell>
              <TableCell>{item.companyName || "-"}</TableCell>
              {item.companyId != null && (
                <TableCell>
                  <Dialog>
                    <DialogTrigger>Change company</DialogTrigger>
                    <CompanyPopup user={item} />
                  </Dialog>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TabsContent>
  );
}
