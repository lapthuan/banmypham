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
      },
    },
    vi: {
      translation: {
        navtop1: "Cửa hàng",
        navtop2: "Kiểm tra đơn hàng",
        sale: "DEALS ĐANG DIỄN RA ",
        xemtatca: "Xem tất cả",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
