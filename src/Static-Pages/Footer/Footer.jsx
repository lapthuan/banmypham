// // import { Button } from "@chakra-ui/react";
// import { useState } from "react";
// import data from "./FooterData.json";
// import "./Footer.css";
// import styles from "./Footer.module.css";

// const Footer = () => {

//   return (
//     // <Box p={10}>
//     //     <Divider size={50} color={"black"} />
//     //     {/* Icons and Logo  */}
//     //     <Flex w="70%"
//     //         m="auto"
//     //         marginTop={30}
//     //         //  justifyContent="space-between"
//     //         gap={4}
//     //         direction={{ base: "column", md: "row" }}
//     //     >

//     //         <Text color="blue.900" fontSize="lg" mb={8}>Sign up to our email list and receive 20% off your next order</Text>
//     //         <br />
//     //         <Button
//     //             backgroundColor="#2E3337"
//     //             color="white"
//     //             borderRadius={0}
//     //             _hover={{ bg: "teal.600" }}
//     //             onClick={() => handleOnClick("/register")}
//     //             size="sm">SIGN UP
//     //         </Button>

//     //         <Spacer />
//     //         <HStack spacing="4" >
//     //             {
//     //                 logos.map(item => (
//     //                     <Image cursor="pointer" w={10} key={item.name} src={item.src} alt={item.title} />
//     //                 ))
//     //             }
//     //         </HStack>

//     //     </Flex>

//     <footer className="footer">
//       <div className="line"></div>
//       <div className="container">
//         <div className="row">
//           <div className="footer-col">
//             <h4>Help & Information</h4>
//             <ul>
//               <li>
//                 <a href="#">Customer Service</a>
//               </li>
//               <li>
//                 <a href="#">Delivery Information</a>
//               </li>
//               <li>
//                 <a href="#">Returns & Refunds</a>
//               </li>
//               <li>
//                 <a href="#">Help Center</a>
//               </li>
//               <li>
//                 <a href="#">Track my order</a>
//               </li>
//               <li>
//                 <a href="#">Accessibility</a>
//               </li>
//               <li>
//                 <a href="#">Cookie Settings</a>
//               </li>
//             </ul>
//           </div>
//           <div class="footer-col">
//             <h4>About SkinStore</h4>
//             <ul>
//               <li>
//                 <a href="#">Key Workers Discount</a>
//               </li>
//               <li>
//                 <a href="#">About Us</a>
//               </li>
//               <li>
//                 <a href="#">Affiliate Program</a>
//               </li>
//               <li>
//                 <a href="#">Brand Directory</a>
//               </li>
//               <li>
//                 <a href="#">Coupon Codes</a>
//               </li>
//               <li>
//                 <a href="#">Refer A Friend</a>
//               </li>
//               <li>
//                 <a href="#">Student Discount</a>
//               </li>
//               <li>
//                 <a href="#">Join SkinStore Experts</a>
//               </li>
//             </ul>
//           </div>
//           <div class="footer-col">
//             <h4>Legal</h4>
//             <ul>
//               <li>
//                 <a href="#">Cookie Information</a>
//               </li>
//               <li>
//                 <a href="#">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="#">Terms & Conditions</a>
//               </li>
//               <li>
//                 <a href="#">Modern Slavery Statement</a>
//               </li>
//             </ul>
//           </div>
//           <div class="footer-col">
//             <h4>follow us</h4>
//             <ul>
//               {" "}
//               <li>
//                 <a href="#">Message Us</a>
//               </li>
//               <li>
//                 <a href="#">Free Beauty Consultations</a>
//               </li>
//               {/* <a href="#"><i class="fab fa-instagram"></i></a>
//                                     <a href="#"><i class="fab fa-linkedin-in"></i></a> */}
//             </ul>
//           </div>
//             <BelowSession />
//         </div>
//       </div>
//     </footer>

//     // </Box >
//   );
// };

// export default Footer;

// const BelowSession = () => {

//   const paymentdata = data.payment;

//   const [pay, setPay] = useState(paymentdata);

//   return (
//     <div>
//       <div className="footer-colss">
//         <div className="kuchnhi">
//           <h1>THG</h1>
//           <div>
//             <h4>2020 @ The Hut.com Ltd.</h4>
//           </div>
//         </div>
//         <div className="social-links">
//           <h4>Pay securely with</h4>
//           <a href="#">
//             <i class="fab fa-facebook-f"></i>
//             {pay.map((e) => (
//               <div className={styles.image}>
//                 <img src={e.icon} />
//               </div>
//             ))}
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// import "@fortawesome/fontawesome-free/css/all.min.css";


import React from "react";

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="mt-10">
      <Footer2 />
    </div>
  );
};

const Footer2 = () => {
  return (
    <footer className="text-center text-lg-start text-[#a0a1a2] bg-black">
      <div className="line"></div>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h1 className="text fw-bold mb-4">LUXUBU</h1>
              <p>
                <p className="text-[15px] text-[#a0a1a2]">
                  LuXuBu - Đẹp tận gốc rễ
                </p>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Danh Mục</h6>
              <p>
                <a className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]">
                  Quà tặng
                </a>
              </p>
              <p className="mt-2">
                <a className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]">
                  Hộp quà làm đẹp
                </a>
              </p>
              <p className="mt-2">
                <a className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]">
                  Phụ kiện
                </a>
              </p>
              <p className="mt-2">
                <a className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]">
                  Chăm sóc da
                </a>
              </p>
              <p className="mt-2">
                <a className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]">
                  Trang điểm
                </a>
              </p>
              <p className="mt-2">
                <a className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]">
                  Thực phẩm chức năng
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Hướng dẫn</h6>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  HDSD & Bảo hành
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  Hướng dẫn đặt hàng
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  Phương thức giao hàng
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  Chính sách đổi trả
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  Chính sách bảo mật
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Thông tin</h6>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  Giới thiệu về Luxubu
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  Chương trình Luxubu
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  Hỗ trợ đơn hàng
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="#!"
                  className="text-[15px] text-[#a0a1a2] hover:text-[#ff2b70]"
                >
                  Mời bạn bè nhận thưởng ngay
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center text-[15px] p-4" style={{ backgroundColor: "#191b1d" }}>
        © 2023 - Bản quyền của Công Ty Cổ Phần LUXU - www.luxubu.com
      </div>
    </footer>
  );
};

export default Footer;
