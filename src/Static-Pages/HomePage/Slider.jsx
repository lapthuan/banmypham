import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Blackfriday from "./Homepage-Images/Black-Friday.jpeg";
import Singlesday from "./Homepage-Images/Singles-Day.jpeg";
import Holidayedit from "./Homepage-Images/Holiday-Edit.jpeg";
import Holidayshop from "./Homepage-Images/Holiday-Shop.jpeg";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
const BgElement = Element.BgElement;

// const slider=[
//     {
//         image:Blackfriday
//     },
//     {
//         image:Singlesday
//     },
//     {
//         image:Holidayedit
//     },
//     {
//         image:Holidayshop
//     },
// ]

function Slider() {
  return (
    <BannerAnim prefixCls="banner-user" autoPlay autoPlaySpeed={3000}>
      <Element prefixCls="banner-user-elem" key="0">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url(${Blackfriday})`,
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="1">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url(${Singlesday})`,
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
      </Element>
    </BannerAnim>
  );
  //     <div className='maindivhai'>
  //   <Carousel autoPlay infiniteLoop showArrows showIndicators>

  // {slider.map((el)=>{
  // return <img src={el.image} alt="additional-image" height='100%' width='90%' />
  // })}

  //   </Carousel>

  //     </div>
}

export default Slider;
