import React from "react";
import { useState } from "react";
import { Input, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import imageUser from "../../Image/user.png"
import { addReview, reviewInProduct } from "../../redux/action/reviewActions";
import { useEffect } from "react";
const { TextArea } = Input
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const FeedBack = ({ product }) => {
  const dispatch = new useDispatch()
  const userId = window.localStorage.getItem("userid")

  const [rate, setRate] = useState(5);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const reviewList = useSelector((state) => state.reviewGet)
  const { reviews } = reviewList
  console.log(reviews);
  useEffect(() => {
    dispatch(reviewInProduct(product))
  }, [product])

  

  const handlerClickSendReview = () => {

    dispatch(addReview(product, userId, rate, title, review))
  }

  const formatDateTime = (time) => {
    const formattedDatetime = moment(time).format("HH:mm | DD/MM/YYYY");
    return formattedDatetime
  }

  const calculateRatingPercentage = (reviews, rating) => {
    if (reviews.length === 0) return 0;
    const totalReviews = reviews.length;
    const ratingCount = reviews.filter(review => review.rating === rating).length;
    const percentage = (ratingCount / totalReviews) * 100;
    return percentage.toFixed(2); // Làm tròn đến 2 chữ số thập phân
  };

  const calculateAverageRating = reviews => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    return averageRating.toFixed(1); // Làm tròn đến 1 chữ số thập phân
  };
  const totalReviews = reviews.length;
  const fiveStarPercentage = calculateRatingPercentage(reviews, 5);
  const fourStarPercentage = calculateRatingPercentage(reviews, 4);
  const threeStarPercentage = calculateRatingPercentage(reviews, 3);
  const twoStarPercentage = calculateRatingPercentage(reviews, 2);
  const oneStarPercentage = calculateRatingPercentage(reviews, 1);
  const averageRating = calculateAverageRating(reviews);
  return (
    <div className="w-[90%] ml-auto mr-auto ">
      <div className=" p-4 bg-[#f5f6f6]">
        <div className="text-[25px] font-bold mr-2 text-left">Đánh giá</div>
        <div className="flex mt-3  ">
          <div className="w-full">
            <div className="mb-2">
              <div className="text-[15px] text-left mr-2">
                Đánh giá trung bình
              </div>
            </div>
            <div className="flex justify-around ">
              <div className="text-center items-center">
                <div className="text-[80px] font-bold text-center text-[#fe2c6d]">
                  {averageRating}
                </div>
                <div>
                  <Rate allowHalf defaultValue={5} className="ml-28" />
                </div>
                <div className="text-[15px]">{totalReviews} nhận xét</div>
              </div>
              <div className="text-center items-center w-[40%]">
                <div class="flex items-center">
                  <span class="text-sm font-medium text-black">5 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded" style={{ width: `${fiveStarPercentage}%` }}></div>
                  </div>
                  <span class="text-sm font-medium text-black">{Math.floor(fiveStarPercentage)}%</span>
                </div>
                <div class="flex items-center mt-2">
                  <span class="text-sm font-medium text-black">4 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded" style={{ width: `${fourStarPercentage}%` }}></div>
                  </div>
                  <span class="text-sm font-medium text-black">{Math.floor(fourStarPercentage)}%</span>
                </div>
                <div class="flex items-center mt-2">
                  <span class="text-sm font-medium text-black">3 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded" style={{ width: `${threeStarPercentage}%` }}></div>
                  </div>
                  <span class="text-sm font-medium text-black">{Math.floor(threeStarPercentage)}%</span>
                </div>
                <div class="flex items-center mt-2">
                  <span class="text-sm font-medium text-black">2 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded" style={{ width: `${twoStarPercentage}%` }}></div>
                  </div>
                  <span class="text-sm font-medium text-black">{Math.floor(twoStarPercentage)}%</span>
                </div>
                <div class="flex items-center mt-2">
                  <span class="text-sm font-medium text-black">1 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded" style={{ width: `${oneStarPercentage}%` }}></div>
                  </div>
                  <span class="text-sm font-medium text-black">{Math.floor(oneStarPercentage)}%</span>
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>
      <div className="bg-white  w-2/4 mx-auto">
        <div class="antialiased mx-auto max-w-screen-sm">
          <h3 class="mb-4 text-2xl font-bold text-gray-900">Bình luận</h3>
          {reviews?.length != 0 ? (<div class="space-y-4 pt-3 h-[380px] overflow-y-scroll">
            {reviews?.map((item) => (


              <div class="flex" key={item._id}>
                <div class="flex-shrink-0 mr-3">
                  <img
                    class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                    src={item.profilePicture ? item.profilePicture : imageUser}
                    alt="avatar"
                  />
                </div>
                <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed text-left">
                  <strong>{item.user.firstname} {" "} {item.user.lastname}</strong>
                  <br />
                  <Rate tooltips={desc} onChange={setRate} value={rate} style={{ color: "#fe2c6d", position: "static" }} disabled />
                  <br />
                  <span class="text-xs text-gray-400">{item.title}</span>
                  <p class="text-sm">
                    {item.review}
                  </p>

                  <div class="mt-4 flex items-center relative">



                    <div class="text-sm text-gray-400 font-medium">
                      {formatDateTime(item.created)}
                    </div>
                  </div>
                </div>
              </div>


            ))}


          </div>) : (<div className="text-xs text-gray-700">Chưa có đánh giá nào</div>)}

        </div>

      </div>
      <div className=" bg-white w-[100%]">
        <div className="box_comment">
          <div className="text-left text-[15px]">
            Đánh giá sản phẩm này *
          </div>
          <div className="text-left block mt-3 mb-4 w-1/2 flex Relative">
            <Rate tooltips={desc} onChange={setRate} value={rate} style={{ color: "#fe2c6d", fontSize: "30px", width: "30%", position: "static" }} />

          </div>
          <div className="text-left text-[15px]">Tiêu đề </div>
          <div className="mt-2 ">
            <Input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Nhập tiêu đề"
            />
          </div>
          <div className="mt-3 text-left text-[15px]">Mô tả nhận xét *</div>
          <div className="mt-2 mb-5">
            <TextArea
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              placeholder="Kí tự tối đa 2500"
              maxLength={2500}
            />
          </div>
          <button onClick={handlerClickSendReview} className="mb-5 w-[30%] text-[15px] rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white">
            Gưi
          </button>
        </div>
      </div>
    </div>
  );
};
export default FeedBack;
