import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Acerca de",
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
        title: " Lista de blogs",
        path: "/blog",
        newTab: false,
      },
      {
        id: 32,
        title: "Crear blog",
        path: "/blog-create",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Recursos",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Lista de recursos",
        path: "/resource",
        newTab: false,
      },
      {
        id: 42,
        title: "Crear recurso",
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
