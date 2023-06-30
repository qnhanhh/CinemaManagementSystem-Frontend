import Logo from "@/components/navbar/logo";
import MenuList from "@/components/navbar/menu-list";
import SearchBar from "@/components/navbar/search-bar";
import UserProfile from "../user-profile";

export default function Navbar() {
  return (
    <div className="flex gap-4 justify-between items-center p-6">
      <Logo />
      <MenuList />
      <SearchBar />
      <UserProfile />
    </div>
  );
}
