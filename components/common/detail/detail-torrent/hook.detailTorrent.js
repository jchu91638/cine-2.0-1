/* Utils */
import { fetchTorrent } from "../../../../util/fetchTorrent";

const Hook = (imdbID) => {
  const { data, error, torrentList } = fetchTorrent(imdbID);

  const bluray_type = torrentList.filter((movie) => movie.type === "bluray");
  const web_type = torrentList.filter((movie) => movie.type === "web");

  console.log({data})

  return {
    data,
    error,

    torrentList,
    bluray_type,
    web_type
  };
};

export default Hook;
