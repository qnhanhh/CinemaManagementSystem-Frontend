import Logo from "@/components/Navbar/logo";
import MenuList from "@/components/Navbar/menu-list";
import SearchBar from "@/components/Navbar/search-bar";
import UserProfile from "@/components/Navbar/user-profile";

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
