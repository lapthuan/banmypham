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
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [rate, setRate] = useState(5);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const reviewList = useSelector((state) => state.reviewGet)
  const { reviews, currentPage, totalPages } = reviewList
  console.log(reviews);
  useEffect(() => {
    dispatch(reviewInProduct(product))
  }, [product])

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handlerClickSendReview = () => {

    dispatch(addReview(product, userId, rate, title, review))
  }

  const formatDateTime = (time) => {
    const formattedDatetime = moment(time).format("HH:mm | DD/MM/YYYY");
    return formattedDatetime
  }
  return (
    <div className="w-[90%] ml-auto mr-auto bg-[#f5f6f6]">
      <div className=" p-4">
        <div className="text-[25px] font-bold mr-2 text-left">Đánh giá</div>
        <div className="flex mt-3">
          <div className="w-[50%]">
            <div className="mb-2">
              <div className="text-[15px] text-left mr-2">
                Đánh giá trung bình
              </div>
            </div>
            <div className="flex">
              <div className="text-center flex-col items-center">
                <div className="text-[80px] font-bold text-center text-[#fe2c6d]">
                  4.7
                </div>
                <div>
                  <Rate allowHalf defaultValue={5} className="ml-28" />
                </div>
                <div className="text-[15px]">2 nhận xét</div>
              </div>
              <div className="text-center flex-col items-center w-[100%]">
                <div class="flex items-center ">
                  <span class="text-sm font-medium text-black">5 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded w-[10%]"></div>
                  </div>
                  <span class="text-sm font-medium text-black">70%</span>
                </div>
                <div class="flex items-center mt-2 ">
                  <span class="text-sm font-medium text-black">4 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                  </div>
                  <span class="text-sm font-medium text-black">70%</span>
                </div>
                <div class="flex items-center mt-2">
                  <span class="text-sm font-medium text-black">3 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                  </div>
                  <span class="text-sm font-medium text-black">70%</span>
                </div>
                <div class="flex items-center mt-2">
                  <span class="text-sm font-medium text-black">2 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                  </div>
                  <span class="text-sm font-medium text-black">70%</span>
                </div>
                <div class="flex items-center mt-2">
                  <span class="text-sm font-medium text-black">1 sao</span>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-[#e8e8e8]">
                    <div class="h-5 bg-yellow-400 rounded w-[70%]"></div>
                  </div>
                  <span class="text-sm font-medium text-black">70%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="mt-10 text-center items-center text-[15px]">
              Chia sẽ nhận xét của bạn về sản phẩm
            </div>
            <button
              className="mt-4 mb-8 w-[30%] text-[15px] rounded-md bg-[#fe2c6d] px-6 py-3 font-medium text-white"
              onClick={toggleCommentForm}
            >
              {showCommentForm ? "Thu gọn" : "Viết bình luận"}
            </button>
          </div>
        </div>
        {showCommentForm && (
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
        )}
      </div>
      <div className="pb-10 border-t-2 ">
        {reviews?.map((item) => (
          <div>
            <div className="flex justify-between mt-2 border-b-2">
              <div className="mt-2 w-[400px]">
                <div className="text-left ml-5 text-lg text-[#fe2c6d] flex">
                  <img
                    src={item.profilePicture ? item.profilePicture : imageUser}
                    alt="avatar"
                    className="rounded-circle mx-auto"
                    style={{ width: "50px", height: "50px" }}
                    fluid
                  />
                  {item.user.firstname} {" "} {item.user.lastname}

                </div>
                <div className="text-left ml-5 text-lg text-black">Tiêu đề: {item.title}</div>

                <div className="text-left mt-2 mb-2 ml-5 flex Relative h-[50px]">
                  <Rate tooltips={desc} onChange={setRate} value={rate} style={{ color: "#fe2c6d", fontSize: "30px", width: "50%", position: "static" }} disabled />

                </div>

                <div className="text-left ml-5 mb-2 text-lg h-[150px] ">
                  Mô tả: 
                  <br />
                  {item.review}
                </div>
              </div>
              <div className="mt-2 mr-3 text-[13px]"> {formatDateTime(item.created)}</div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};
export default FeedBack;
