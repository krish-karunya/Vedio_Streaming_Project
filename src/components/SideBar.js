import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asset } from "../images";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.sideBar.showSideBarView);
  //Early return pattern :

  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className='fixed min-w-48 z-10 p-5 top-20  bg-white'>
      <div className='flex  mt-5  px-5 hover:bg-slate-200 hover:rounded-lg'>
        <img src={asset.home} alt='home-icon ' className='w-8 h-8' />
        <Link to='/'>
          {" "}
          <p className='ml-5 text-slate-400 font-semibold'>Home </p>
        </Link>
      </div>
      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg  '>
        <img src={asset.game_icon} alt='home-icon' className='w-8 h-8' />
        <p className='ml-5 text-slate-400 font-semibold'>Gaming </p>
      </div>
      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg '>
        <img src={asset.auto_mobile} alt='home-icon' className='w-8 h-8' />
        <p className='ml-5 text-slate-400 font-semibold'>Automobiles </p>
      </div>
      <div className='w-full  border-y-[1px] border-slate-200 mt-3  hover:bg-slate-200 hover:rounded-lg'></div>
      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg '>
        <img src={asset.entertainment} alt='home-icon' className='w-8 h-8' />
        <p className='ml-5 text-slate-400 font-semibold'>Entertainment </p>
      </div>
      <div className='flex mt-5  px-5   hover:bg-slate-200 hover:rounded-lg'>
        <img src={asset.tech} alt='home-icon' className='w-8 h-8' />
        <p className='ml-5 text-slate-400 font-semibold'>Technology </p>
      </div>
      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg '>
        <img src={asset.music} alt='home-icon' className='w-8 h-8' />
        <p className='ml-5 text-slate-400 font-semibold'>Music </p>
      </div>
      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg '>
        <img src={asset.blogs} alt='home-icon' className='w-8 h-8' />
        <p className='ml-5 text-slate-400 font-semibold'>Blogs </p>
      </div>

      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg '>
        <img src={asset.news} alt='home-icon' className='w-8 h-8' />
        <p className='ml-5 text-slate-400 font-semibold'>News </p>
      </div>
      <div className='w-full  border-y-[1px] border-slate-200 mt-3  hover:bg-slate-200 hover:rounded-lg'></div>
      <h1 className='font-semibold mt-3 text-xl text-slate-600 p-2'>
        Subscriptions
      </h1>
      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg'>
        <img
          src={asset.megan}
          alt='home-icon'
          className='w-8 h-8 rounded-full'
        />
        <p className='ml-5 text-slate-400 font-semibold'>Logic First </p>
      </div>
      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg'>
        <img
          src={asset.simon}
          alt='home-icon'
          className='w-8 h-8 rounded-full'
        />
        <p className='ml-5 text-slate-400 font-semibold'>Blogs </p>
      </div>
      <div className='flex mt-5  px-5  hover:bg-slate-200 hover:rounded-lg'>
        <img
          src={asset.jack}
          alt='home-icon'
          className='w-8 h-8 rounded-full'
        />
        <p className='ml-5 text-slate-400 font-semibold'>Akshay saini </p>
      </div>
    </div>
  );
};

export default SideBar;
