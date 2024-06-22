import React from "react";
import { value_converter } from "../utils/constant";
import { useSelector } from "react-redux";

const VedioCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  // const isMenuOpen = useSelector((store) => store.sideBar.showSideBarView);
  return (
    <div className='rounded-lg flex justify-start'>
      <div className=' m-2 ml-12 '>
        <img
          src={thumbnails.medium.url}
          alt='thumbnails'
          className='min-w-96 h-52 rounded-lg'
        />

        <div className='text-left p-2'>
          <ul className='w-72 text-wrap text-left'>
            <li className='font-semibold text-sm'>{title}"😊"</li>

            <li className=' text-sm ml-2 text-slate-600 font-medium '>
              {channelTitle}
            </li>
            <li className='font-medium text-sm text-slate-600 '>
              <span className='pl-2'>
                {value_converter(statistics.viewCount)} Views
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

//  npx create-react-app namaste-youtube

export const AdVedioCard = ({ info }) => {
  return (
    <div>
      <h1 className='text-center absolute pt-2 ml-14 font-bold text-white bg-slate-800 rounded-lg mt-3 p-2'>
        advertisement
      </h1>
      <VedioCard info={info} />
    </div>
  );
};
export default VedioCard;
