import React from "react";
import Button from "./Button";
export const ButtonList = () => {
  const lists = [
    "All",
    "Game",
    "News",
    "Songs",
    "Movies",
    "Shorts",
    "Cooking",
    "Criket",
    "FootBall",
    "Live",
    "Party",
    "Wisdom",
    "Songs",
    // "Songs",
    // "Movies",
    // "Shorts",
    // "Cooking",
    // "Criket",
    // "FootBall",
    // "Live",
    // "Party",
    // "Wisdom",
    // "Songs",
    // "Criket",
    // "FootBall",
    // "Live",
    // "Party",
    // "Wisdom",
    // "Songs",
    // "Songs",
    // "Movies",
    // "Shorts",
    // "Cooking",
    // "Criket",
    // "FootBall",
  ];
  return (
    <div className='flex overflow-x-auto w-fit fixed top-20 bg-white py-5 z-20 left-60'>
      {lists.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};
