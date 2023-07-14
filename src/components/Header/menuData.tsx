import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Teams",
    path: "/team",
    newTab: false,
  },
  {
    id: 3,
    title: "Blogs",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Carbon Footprint Calculator (CFC)",
    path: "/cfc",
    newTab: true,
  },
];
export default menuData;
