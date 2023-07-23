import Logo from "@/components/navbar/logo";
import MenuList from "@/components/navbar/menu-list";
import SearchBar from "@/components/navbar/search-bar";
import UserProfile from "../user-profile";
import Link from "next/link";

export default function Navbar() {
  const token=localStorage.getItem("token")

  return (
    <div className="flex gap-4 justify-between items-center p-6">
      <Logo />
      <MenuList />
      <SearchBar />
      {token ? (
        <UserProfile />
      ) : (
        <Link href="/account/login" replace={true} className="text-white font-bold">
          Login
        </Link>
      )}
    </div>
  );
}
