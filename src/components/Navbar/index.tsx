import Logo from "@/components/navbar/logo";
import MenuList from "@/components/navbar/menu-list";
import SearchBar from "@/components/navbar/search-bar";
import UserProfile from "../user-profile";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    }
  }, []);

  return (
    <div className="flex gap-4 justify-between items-center p-6">
      <Logo />
      <MenuList />
      <SearchBar />
      {token ? (
        <UserProfile />
      ) : (
        <Link
          href="/account/login"
          replace={true}
          className="text-white font-bold"
        >
          Login
        </Link>
      )}
    </div>
  );
}
