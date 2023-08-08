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
    title: "Blogs",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blogs list",
        path: "/blog",
        newTab: false,
      },
      {
        id: 32,
        title: "Create blog",
        path: "/blog-create",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Resource list",
        path: "/resource",
        newTab: false,
      },
      {
        id: 42,
        title: "Create resource",
        path: "/resource-create",
        newTab: false,
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "Carbon Footprint Calculator (CFC)",
  //   path: "/cfc",
  //   newTab: true,
  // },
];
export default menuData;
