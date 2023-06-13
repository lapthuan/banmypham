import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navtop1: "Shop",
        navtop2: "Order",
        sale: "DEALS",
        xemtatca: "See all",
        footer: "Gift",
        ani_text1: "Get 700,000 VND for orders from 1 Million - Enter APR1000",
        ani_text2:
          "Free Gift 1,295,000 VND Application from 2 million - Enter APR2000",
        ani_text3: "Update birthdays to receive gifts every year",
        menu1: "Home",
        menu2: "Product",
        menu3: "Brand",
        menu4: "Service",
        menu5: "",
        menu6: "Contact",
        LoginLogout: "Login / Signup",
        search: "Search for lipstick, cleanser, makeup remover, ....",
        carts: "NEW PRODUCT",
        carts2: "SELLING PRODUCTS",
        carts3: "BEST SELLING BRAND",
        carts4: "PRODUCTS FOR YOU",
        carts5: "MOST SEARCH",
        carts6: "HIGHLIGHTS PROGRAM",
        footertitle:
          "Luxubu - Bringing affordable luxury goods to urban people",
        footertitle1: "Category",
        footertitle2: "Link",
        footertitle3: "Brand",
      },
    },
    vi: {
      translation: {
        navtop1: "Cửa hàng",
        navtop2: "Đơn hàng",
        sale: "DEALS ĐANG DIỄN RA ",
        xemtatca: "Xem tất cả",
        ani_text1: "Tặng 700.000đ cho đơn hàng từ 1 Triệu - Nhập APR1000",
        ani_text2: "Free Quà 1.295.000đ đơn từ 2 Triệu - Nhập APR2000",
        ani_text3: "Cập nhật ngày sinh nhật để nhận quà hằng năm",
        menu1: "Trang chủ",
        menu2: "Sản phẩm",
        menu3: "Thương hiệu",
        menu4: "Dịch vụ",
        menu5: "",
        menu6: "Liên hệ",
        LoginLogout: "Đăng nhập / Đăng ký",
        search: "Tìm kiếm son, sữa rữa mặt, bông tẩy trang,....",
        carts: "SẢN PHẨM MỚI",
        carts2: "SẢN PHẨM BÁN CHẠY",
        carts3: "THƯƠNG HIỆU BÁN CHẠY",
        carts4: "SẢN PHẨM DÀNH CHO BẠN",
        carts5: "TÌM KIẾM NHIỀU NHẤT",
        carts6: "CHƯƠNG TRÌNH NỔI BẬT",
        footertitle:
          "Luxubu - Mang hàng cao cấp vừa túi tiền đến dân thành thị",
        footertitle1: "Danh mục",
        footertitle2: "Đường dẫn",
        footertitle3: "Thương hiệu",
      },
    },
  },
  lng: "vi",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
