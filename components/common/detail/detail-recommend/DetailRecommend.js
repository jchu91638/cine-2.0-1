import React from "react";
/* Hook */
import Hook from "./hook.detailRecommend";

const DetailRecommend = ({ media_type, id }) => {
  const { recommendList } = Hook(media_type, id);

  return (
    <section className="">
      <div className="container_x_md py-5">
        <h1 className="title-2 text-wah mb-5">
          Recommended
          {media_type === "movie" ? " Movies" : " Shows"}
        </h1>

        <div className="flex overflow-y-auto pb-4 gap-x-3">
          {recommendList === null ? (
            <p className="text-danger">No recommendations for now.</p>
          ) : (
            recommendList
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailRecommend;
