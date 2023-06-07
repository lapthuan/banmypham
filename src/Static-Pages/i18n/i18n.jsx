import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navtop1: "Shop",
        navtop2: "Check your order",
        sale: "DEALS",
        xemtatca: "See all",
        footer: "Gift",
        ani_text1: "Get 700,000 VND for orders from 1 Million - Enter APR1000",
        ani_text2:
          "Free Gift 1,295,000 VND Application from 2 million - Enter APR2000",
        ani_text3: "Update birthdays to receive gifts every year",
      },
    },
    vi: {
      translation: {
        navtop1: "Cửa hàng",
        navtop2: "Kiểm tra đơn hàng",
        sale: "DEALS ĐANG DIỄN RA ",
        xemtatca: "Xem tất cả",
        ani_text1: "Tặng 700.000đ cho đơn hàng từ 1 Triệu - Nhập APR1000",
        ani_text2: "Free Quà 1.295.000đ đơn từ 2 Triệu - Nhập APR2000",
        ani_text3: "Cập nhật ngày sinh nhật để nhận quà hằng năm",
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
