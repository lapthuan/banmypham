export const Nav = [
  {
    name: "Trang chủ",
    path: "/",
    icon: "Home",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { namelink: "T-shirt", link: "/" },
          { namelink: "Casual shirts", link: "/" },
          { namelink: "formal shirts", link: "/" },
          { namelink: "formal shirts", link: "/" },
          { namelink: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Sản phẩm",
    path: "/Sale",
    icon: "Store",
  },
  {
    name: "Nhãn hàng",
    path: "/Brands",
    icon: "Brand",
  },
  {
    name: "Dịch vụ",
    path: "/Invite",
    icon: "About",
  },
  {
    name: "Blog",
    path: "/blog",
    icon: "Blog",
  },
  {
    name: "Liên hệ",
    path: "/FContact",
    icon: "Contact",
  },
];
