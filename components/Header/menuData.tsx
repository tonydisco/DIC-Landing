import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Trang chủ",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "giới thiệu",
    newTab: false,
    path: "/about-us",
  },
  {
    id: 3,
    title: "Sản phẩm",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "đầu tư kinh doanh bất động sản",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "bê tông thương phẩm",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "ống cống ly tâm",
        newTab: false,
        path: "/auth/signup",
      },

      {
        id: 35.1,
        title: "cho thuê văn phòng",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "xây dựng dân dụng và công nghiệp",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "quan hệ cổ đông",
    newTab: false,
    path: "/qhcd",
  },
  {
    id: 5,
    title: "liên hệ",
    newTab: false,
    path: "/contact-us",
  },
];

export default menuData;
