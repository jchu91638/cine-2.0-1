import React from "react";

/* api call */
import { useGetTrendingAllDayQuery } from "../../../../services/services.home";

/* Components */
import SwiperHero from "../../../common/swipers/swiper.hero";
import { SwiperSlide } from "swiper/react";
import SlideItem from "./SlideItem";

const Hero = () => {
  const { data, error, isLoading } = useGetTrendingAllDayQuery();

  let slideItems;
  if (data) {
    slideItems = data?.results?.slice(0, 5).map((item) => {
      return (
        <SwiperSlide>
            <SlideItem
              key={item.id}
              id={item.id}
              index={data.results.indexOf(item)}
              backdrop_path={item.backdrop_path}
              title={item.title}
              overview={item.overview}
              name={item.name}
              media_type={item.media_type}
            />
        </SwiperSlide>
      );
    });
  }

  return (
    <section className="">
      <div className="pt-20 bg-dark">
        <SwiperHero>
            {slideItems}
        </SwiperHero>
      </div>
    </section>
  );
};

export default Hero;
