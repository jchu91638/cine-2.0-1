import React from "react";
import Image from "next/image";

/* Hook */
import Hook from "./hook.detailTorrent";

const TorrentItem = ({ item }) => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="flex flex-col">
          <a href={item.url}>
            <button
              data-place={item.size}
              className="torrent-btn cursor-pointer py-1 px-4 font-primary text-cfs-1 rounded-md text-wah"
            >
              <span className="font-bold">{item.quality}</span>.
              <span className="capitalize">{item.type}</span>
            </button>
          </a>
        </div>
        <div>
          <a href={`magnet:?xt=urn:btih:${item.hash}`}>
            <Image
              width={20}
              height={20}
              src="/magnet.svg"
              alt="magnet download"
              className="rotate-180"
            />
          </a>
        </div>
      </div>
      <span className="text-[12px] mt-1 ml-4">{item.size}</span>
    </>
  );
};

const DetailTorrent = ({ imdbID }) => {
  const { data, error, torrentList, web_type, bluray_type } = Hook(imdbID);

  if (!data) return <p>Fetching torrents 😉</p>;
  if (error || torrentList.length === 0) return <p>No torrents found 😑</p>;

  // console.log({torrentList})
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        {data && (
          <>
            {web_type.length > 0 && (
              <div className="flex flex-col gap-2 p-2 rounded">
                <p className="font-heading font-bold text-warning">Web</p>
                {web_type.map((item, index) => {
                  return <TorrentItem key={index} item={item} />;
                })}
              </div>
            )}

            {bluray_type.length > 0 && (
              <div className="flex flex-col gap-2 p-2 rounded">
                <p className="font-heading font-bold text-warning">Bluray</p>
                {bluray_type.map((item, index) => {
                  return <TorrentItem key={index} item={item} />;
                })}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default DetailTorrent;
