import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VedioCard, { AdVedioCard } from "./VedioCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VedioContainer = () => {
  const [vedios, setVedios] = useState(null);
  const getVedio = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVedios(json.items);
  };
  useEffect(() => {
    getVedio();
  }, []);
  if (!vedios) {
    return <Shimmer />;
  }

  return vedios.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='grid grid-cols-3 gap-x-24 scrollbar-hide   '>
      <AdVedioCard info={vedios[16]} />
      {vedios.map((vedio) => (
        <Link to={"/watch?v=" + vedio.id} key={vedio.id}>
          <VedioCard info={vedio} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
