import React from "react";

/* Hook */
import Hook from "./hook.moviesResult";

/* Components */
import SearchResultCard from "../../../common/cards/SearchResultCard";

const MoviesResult = ({ query, page }) => {
  const { data, error, isLoading } = Hook(query, page);

  const movieResultList = data?.results?.map((movie, index) => {
    return (
      <div key={index}>
        <SearchResultCard
          id={movie.id}
          title={movie.title}
          image={movie.poster_path}
          name={movie.name}
        />
      </div>
    );
  });

  return (
    <section className="flex-[7]">
      <div className="container_x_md py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8">
          {movieResultList}
        </div>
      </div>
    </section>
  );
};

export default MoviesResult;
