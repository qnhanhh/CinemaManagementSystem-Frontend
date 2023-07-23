import { getUsers } from "@/api/users";
import StateHandler, { States } from "@/components/state-handler";
import { Button } from "@/components/ui/button";
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
              <TableCell>{item.companyId || "-"}</TableCell>
              <TableCell>
                <Button>Change company</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TabsContent>
  );
}
