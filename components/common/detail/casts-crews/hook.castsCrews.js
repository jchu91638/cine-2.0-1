import useSWR from "swr";

/* constant */
import { API_KEY } from "../../../../constants/common";

const Hook = (media_type, id) => {
  let url = `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${API_KEY}&language=en-US`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  let castsToShow,
    crewsToShow = [];
  if (data?.cast) {
    castsToShow =
      data?.cast?.length > 11 ? data?.cast?.slice(0, 11) : data?.cast;
  }

  if (data?.crew) {
    //  To Crews
    data?.crew?.filter((item) => {
      item.job === "Director" && crewsToShow.push(item);
      return item.job === "Director";
    });

    data?.crew?.filter((item) => {
      item.job === "Producer" && crewsToShow.push(item);
      return item.job === "Producer";
    });

    data?.crew?.filter((item) => {
      item.job === "Novel" && crewsToShow.push(item);
      return item.job === "Novel";
    });

    data?.crew?.filter((item) => {
      item.job === "Characters" && crewsToShow.push(item);
      return item.job === "Characters";
    });

    data?.crew?.filter((item) => {
      item.job === "Writer" && crewsToShow.push(item);
      return item.job === "Writer";
    });

    data?.crew?.filter((item) => {
      item.job === "Executive Producer" && crewsToShow.push(item);
      return item.job === "Executive Producer";
    });
  }

  return {
    data,
    error,
    castsToShow,
    crewsToShow,
  };
};

export default Hook;
