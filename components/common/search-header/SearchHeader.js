import Image from "next/image";
import Link from "next/link";

/* constants */
import { TMDB_IMG, TMDB_IMG_RES } from "../../../constants/common";

/* Components */
import TextField from "@mui/material/TextField";

/* Hook */
import Hook from "./hook.searchHeader";

const SearchHeader = ({ query }) => {
  const {
    formValue,
    displaySuggest,
    suggestData_movie,
    suggestData_tv,
    holderValue,

    /* actions */
    setFormVal,
    handleEnterInput,
    handleOnChangeInput,
    handleSuggestion,
    setHolderValue,
  } = Hook(query);

  return (
    <section className="search-header">
      <div className="container_x_md py-4">
        <div>
          <form onSubmit={handleEnterInput}>
            <TextField
              fullWidth
              label="Search for movies and series"
              id="fullWidth"
              autoComplete="off"
              variant="filled"
              value={holderValue ? holderValue : ""}
              size="small"
              onChange={(e) => {
                setHolderValue(e.target.value);
                setTimeout(() => {
                  handleOnChangeInput(e);
                }, 1500);
              }}
            />

            {(suggestData_movie || suggestData_tv) && (
              <div
                className={`absolute w-[90%] lg:w-[25%] flex gap-y-1 flex-col z-[500] bg-white cus-box-shadow p-1 rounded max-h-[500px] overflow-scroll ${
                  displaySuggest
                    ? "visible opacity-100"
                    : " invisible opacity-0"
                }`}
              >
                {suggestData_movie && (
                  <div>
                    <p className="text-xs font-bold ml-1">Movies :</p>
                    <div className="flex gap-y-1 flex-col">
                      {suggestData_movie &&
                        suggestData_movie?.map((item, index) => {
                          return (
                            <div
                              className="rounded cursor-pointer text-secondary border-transparent border border-solid p-2 bg-wah transition-all hover:text-primary hover:border-primary hover:bg-wah"
                              key={index}
                            >
                              <Link href={`/movies/${item.id}`}>
                                <a>
                                  <div className="flex gap-3 items-center">
                                    <Image
                                      width={50}
                                      height={70}
                                      src={`${TMDB_IMG}${TMDB_IMG_RES.poster_sizes[1]}/${item.poster_path}`}
                                      alt={item.name ? item.name : item.title}
                                      className="flex-[4] object-cover shadow-md"
                                    />
                                    <p className="flex-[6] line-clamp-1 overflow-ellipsis">
                                      {item.name ? item.name : item.title}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}

                {suggestData_tv && (
                  <div>
                    <p className="text-xs font-bold ml-1">Series :</p>
                    <div className="flex gap-y-1 flex-col">
                      {suggestData_tv?.map((item, index) => {
                        return (
                          <div
                            className="rounded cursor-pointer text-secondary border-transparent border border-solid p-2 bg-wah transition-all hover:text-primary hover:border-primary hover:bg-wah"
                            key={index}
                          >
                            <Link href={`/series/${item.id}`}>
                              <a>
                                <div className="flex gap-3 items-center">
                                  <Image
                                    width={50}
                                    height={70}
                                    src={`${TMDB_IMG}${TMDB_IMG_RES.poster_sizes[1]}/${item.poster_path}`}
                                    alt={item.name ? item.name : item.title}
                                    className="flex-[4] object-cover shadow-md"
                                  />
                                  <p className="flex-[6] line-clamp-1 overflow-ellipsis">
                                    {item.name ? item.name : item.title}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchHeader;
