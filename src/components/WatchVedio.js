import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchVedio = () => {
  const [searchParam] = useSearchParams();
  // console.log(searchParam.get("v"));
  const vedioId = searchParam.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className='w-full  p-28'>
      <div className='flex w-full'>
        <div className='px-5'>
          <iframe
            width='1000'
            height='500'
            src={
              "https://www.youtube.com/embed/" +
              vedioId +
              "?si=XOZhToPJ7qr9S4Zm"
            }
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen></iframe>
        </div>
        <div>
          <LiveChat />
        </div>
      </div>

      <div className='w-[1000px]  border-r-cyan-300'>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchVedio;
