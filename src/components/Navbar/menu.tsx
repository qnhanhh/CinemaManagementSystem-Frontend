import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { menuType } from "./constant";
import { usePathname, useRouter } from "next/navigation";

export default function Menu({ name, link }: menuType) {
  const router = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href={link}
            className={`hover:text-white p-3 ${
              router == link ? "text-white" : "text-gray-600"
            }`}
          >
            {name}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
