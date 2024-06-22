import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSideBarView } from "../utils/sideBarSlice";
import { API_KEY, YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheSlice } from "../utils/searchSlice";
import { addVedioList } from "../utils/vedioSlice";
import { asset } from "../images";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleShowSideBarView());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchValue]) {
        // console.log(searchCache[searchValue]);
        setSuggestions(searchCache[searchValue]);
      } else {
        getSearchValue();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const getSearchValue = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchValue);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheSlice({
        [searchValue]: json[1],
      })
    );
  };

  useEffect(() => {
    getVedioList();
  }, []);

  const getVedioList = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" +
        searchValue +
        "&key=" +
        API_KEY
    );
    const json = await data.json();
    console.log(json.items);
    dispatch(addVedioList(json.items));
  };

  return (
    <div className='grid grid-flow-col  p-2 w-full h-18 fixed m z-40 bg-white'>
      <div className='flex '>
        <img
          className='h-6 m-5 cursor-pointer '
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'
          alt='hamburger Icon'
          onClick={toggleMenuHandler}
        />
        <img
          className='h-10 my-4'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMUFKBMhjEb3DU2V5jnrJHz6jmKOCwtZ-K1LLIQVGZtuVpjFHjOXEGOKmxY2nkOCXp_I&usqp=CAU'
          alt='youtube logo'
        />
      </div>
      <div className='col-span-10 text-center my-4 '>
        <div className='flex justify-center items-center'>
          <input
            type='text'
            placeholder='Search'
            className='w-1/2 p-2 pl-4 border border-gray-500 rounded-l-full shadow-lg '
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => {
              setShowSuggestion(true);
            }}
            onBlur={() => {
              setShowSuggestion(false);
            }}
          />
          <button
            className=' p-2 rounded-r-full border border-slate-400 text-white font-bold w-16 '
            onClick={getVedioList}>
            <img
              src={asset.search}
              alt='search icon'
              className='h-6 w-6 bg-transparent  ml-2'
            />
          </button>
          <div className='ml-5 cursor-pointer w-10 h-10 bg-slate-200 rounded-full flex justify-center items-center '>
            <img src={asset.micro_phn} alt='microphone' className='h-5 w-5' />
          </div>
        </div>
        {showSuggestion && (
          <div className='  ml-64 w-[33rem]  text-left rounded-lg border border-gray-800s bg-white absolute'>
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li
                    className='p-2 shadow-sm hover:bg-slate-300'
                    key={suggestion}>
                    🔍{suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className='  col-span-1 my-3 ml-16 items-center'>
        <img
          className='h-10'
          src='https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png'
          alt='user icon'
        />
      </div>
    </div>
  );
};

export default Header;
