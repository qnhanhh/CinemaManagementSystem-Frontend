import Menu from "./menu";

export type menuType = {
  name: string;
  link: string;
};

const menuList: menuType[] = [
  {
    name: "Movies",
    link: "/movies",
  },
  {
    name: "Genres",
    link: "/genres",
  },
  {
    name: "Favorites",
    link: "/favorites",
  },
];

export default function MenuList() {
  return (
    <div className="flex flex-1 justify-around">
      {menuList.map((menu, index) => (
        <Menu key={index} name={menu.name} link={menu.link} />
      ))}
    </div>
  );
}
