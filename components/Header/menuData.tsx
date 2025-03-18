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
    path: "/sp",
    submenu: [
      {
        id: 31,
        title: "đầu tư kinh doanh bất động sản",
        newTab: false,
        path: "/sp/dau-tu-kinh-doanh-bds",
      },
      {
        id: 34,
        title: "bê tông thương phẩm",
        newTab: false,
        path: "/sp/be-tong-thuong-pham",
      },
      {
        id: 35,
        title: "ống cống ly tâm",
        newTab: false,
        path: "/sp/ong-cong-ly-tam",
      },

      {
        id: 35.1,
        title: "cho thuê văn phòng",
        newTab: false,
        path: "/sp/cho-thue-van-phong",
      },
      {
        id: 36,
        title: "xây dựng dân dụng và công nghiệp",
        newTab: false,
        path: "/sp/xay-dung-dan-dung-va-cong-nghiep",
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
