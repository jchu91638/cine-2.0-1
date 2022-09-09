import React from "react";
import Link from "next/link";

/* Components */
import SearchResultCard from "../../common/cards/SearchResultCard";

/* Icons */
import { CircularProgress } from "@mui/material";

const Content = ({
  currentCategory,
  data,
  error,

  setActiveCategory,
}) => {
  return (
    <>
      <div className="flex-8 min-w-full lg:min-w-[878px] min-h-full">
        {data ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8">
            {data?.results?.map((item, index) => {
              return (
                <div key={item.id} className="flex justify-center items-center">
                  <SearchResultCard
                    id={item.id}
                    title={item.title}
                    image={item.poster_path}
                    name={item.name}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-[300px] flex justify-center items-center">
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
