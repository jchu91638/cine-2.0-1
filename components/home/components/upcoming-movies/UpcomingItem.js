import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const UpcomingItem = ({ id, title, poster_path, overview, release_date }) => {
  const route_type = "movies";

  return (
    <div className="bg-wah rounded-md overflow-hidden cus-box-shadow">
      <div className=" flex h-full">
        <div className="flex-1 md:flex-2">
          <div className="flex relative w-[100px] h-[150px]">
            <Image
              layout="fill"
              quality="10"
              className="w-[100px] h-full object-cover"
              src={`https://www.themoviedb.org/t/p/w185/${poster_path}`}
              alt={`${title} poster`}
            />
          </div>
        </div>
        <div className="flex-[4] px-3 py-5 flex flex-col justify-between items-start">
          <Link href={`/${route_type}/${id}`}>
            <a>
              <div className="cursor-pointer">
                <h1 className="text-dark inline-block text-[1.2rem] lg:text-xl relative font-heading upcoming-title mb-4">
                  {title}
                </h1>

                <p className="text-primary font-bold font-special">
                  {moment(release_date).format("D MMM, YYYY")}
                </p>
              </div>
            </a>
          </Link>

          <p className="line-clamp-2 overflow-ellipsis">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingItem;
