import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useLoginStore } from "@/store";

export default function Dropdown() {
  const router = useRouter();
  const setLogin = useLoginStore((state) => state.setLogin);

  const logOut = () => {
    setLogin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token");
    router.push("/home");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DialogTrigger asChild>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DialogTrigger>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Report</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logOut}>
          <div className="flex gap-1 items-center cursor-pointer">
            <LogOut size={14} className="mr-1" />
            Log out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
