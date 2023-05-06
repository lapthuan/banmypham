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
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
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
    <MDBFooter className="text-center text-lg-start text-[#a0a1a2] bg-black">
      <div className="line"></div>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h1 className="text fw-bold mb-4 ">LUXUBU</h1>
              <p>
                <p className="text-reset">
                  Lixibox - Bringing affordable luxury to the urban population
                </p>
              </p>
              {/* <p>
                <a href="#!" className="text-reset">
                  Delivery Information
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Danh Mục</h6>
              <p>
                <a href="#!" className="text-reset">
                  Quà tặng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hộp quà làm đẹp
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Phụ kiện
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Chăm sóc da
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Trang điểm
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Thực phẩm chức năng
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Hướng dẫn</h6>
              <p>
                <a href="#!" className="text-reset">
                  HDSD & Bảo hành
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hướng dẫn đặt hàng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Phương thức giao hàng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Chính sách đổi trả
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Chính sách bảo mật
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Thông tin</h6>
              <p>
                <a href="#!" className="text-reset">
                  Giới thiệu về Luxubu
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Chương trình Luxubu
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hỗ trợ đơn hàng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Mời bạn bè nhận thưởng ngay
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "#191b1d" }}>
        © 2023 - Bản quyền của Công Ty Cổ Phần Sachi - www.luxubu.com
      </div>
    </MDBFooter>
  );
};

export default Footer;
