import React from "react";
import Link from "next/link";

/* Icons */
import { AccessTimeSharp, StarRateRounded, People } from "@mui/icons-material";

/* Components */
import { Button } from "@mui/material";
import DetailTorrent from "../detail-torrent/DetailTorrent";

const DetailHero = ({
  data,
  error,
  loading,

  title,
  backgroundImage,
  poster,
  releasedYear,
  contentRating,
  genres,
  runtime,
  status,
  tagline,
  overview,
  rating,
  popularity,
  imdbID,
}) => {
  return (
    <>
      {data && (
        <section
          className="detail--hero bg-fixed bg-dark bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="detail--heroWrapper text-white h-full">
            <div className="container pt-8 pb-48 max-w-[90rem] mx-auto px-14">
              <div className="flex gap-x-8">
                <img
                  className="rounded-md relative min-w-[18.75rem] max-h-[450px] h-[28.125rem] w-[18.75rem]"
                  src={poster}
                  alt={`${title}'s poster`}
                />
                <div className="flex flex-col gap-y-8">
                  <div>
                    <div>
                      <h1 className="text-4xl font-heading font-bold">
                        {title}{" "}
                        <span className="text-[1.625rem] font-normal ml-[15px]">
                          ( {releasedYear} )
                        </span>
                      </h1>
                    </div>

                    <div className="flex gap-x-4">
                      {contentRating && (
                        <div className="border border-solid border-warning text-warning font-bold p-[2px]">
                          <p>{contentRating}</p>
                        </div>
                      )}

                      <p className="">
                        <span className="flex gap-x-1">
                          {genres?.map((item) => {
                            let type =
                              item.name === "Science Fiction"
                                ? "Sci-fi"
                                : item.name;
                            return (
                              <Link
                                key={item.name}
                                href={`/discover/movies/${type.toLowerCase()}`}
                              >
                                <span className="border border-solid border-light rounded-full text-sm py-[2.5px] px-[5px] cursor-pointer">
                                  {type}
                                </span>
                              </Link>
                            );
                          })}
                        </span>
                      </p>

                      <div>
                        {runtime !== "m" && runtime !== "undefinedm" && (
                          <p className="flex justify-center items-center gap-x-1 text-base">
                            <AccessTimeSharp className="w-4" />
                            {runtime}
                          </p>
                        )}
                        {status === "In Production" && (
                          <p className="uppercase font-bold text-warning">
                            Coming Soon
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-4">
                      <div>
                        {tagline && (
                          <p className="font-bold text-gray italic">
                            " {tagline} "
                          </p>
                        )}
                      </div>
                      <div className="w-1/2">
                        <h1 className="text-gray text-[1.375rem] font-bold font-heading">
                          Overview
                        </h1>
                        <p>{overview}</p>
                      </div>
                    </div>

                    <div className="flex gap-x-4">
                      <div className="inline-flex gap-y-2">
                        <StarRateRounded className="w-8" />
                        <p className="text-cfs-2 font-bold  flex justify-center items-center">
                          {rating}
                        </p>
                      </div>

                      <div className="inline-flex gap-y-2">
                        <People className="w-8" />
                        <p className="text-cfs-2 font-bold flex justify-center items-center">
                          {popularity}
                        </p>
                      </div>
                    </div>

                    <Button className="btn-outline">View Trailer</Button>
                  </div>

                  <div>
                    <h1 className="text-gray text-[1.375rem] font-bold font-heading">
                      Download
                    </h1>

                    <DetailTorrent imdbID={imdbID} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DetailHero;
