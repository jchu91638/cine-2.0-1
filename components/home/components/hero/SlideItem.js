import React from "react";

/* Components */
import { Button } from "@mui/material";

const SlideItem = ({
  id,
  index,
  backdrop_path,
  title,
  overview,
  name,
  media_type,
}) => {
  return (
    <>
      <div
        className="h-[600px] bg-top bg-no-repeat bg-cover relative w-full"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original/${backdrop_path})`,
        }}
      >
        <div className="slide--hero-wrapper px-16 flex items-center justify-start absolute w-full left-0 text-wah">
          <div className="max-w-[90rem]">
            <p className='font-writing text-xl'>
              Top <span className='inline-flex justify-center items-center font-heading font-extrabold h-8 w-8 text-light bg-[#071e3d80] rounded-full'>{index + 1}</span> on board
            </p>
            <h1 className='font-heading font-extrabold text-4xl drop-shadow-text'>{title ? title : name}</h1>

            <p className='w-[45%] drop-shadow-text'>{overview}</p>

            {/* <Link onClick={getItemInfo} to={`/${route_type}/${id}`}> */}
              <Button variant="contained" className=''>
                View Detail
              </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideItem;
