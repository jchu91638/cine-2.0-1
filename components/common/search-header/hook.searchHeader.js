import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

/* constants */
import { API_KEY } from "../../../constants/common";

const Hook = (query) => {
  const [displaySuggest, setDisplaySuggest] = useState(false);
  const [formValue, setFormVal] = useState("");
  const [suggestData_movie, setSuggestData_movie] = useState(null);
  const [suggestData_tv, setSuggestData_tv] = useState(null);

  const [holderValue, setHolderValue] = useState(query);

  const router = useRouter();

  useEffect(() => {
    setHolderValue(query);
  }, [query]);

  let url, url_tv;

  let searchValue = formValue.trim();
  if (searchValue.length === 0) {
    url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=demo`;
    url_tv = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=demo`;
  } else {
    url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`;
    url_tv = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchValue}`;
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(url, fetcher);
  const { data: tvData } = useSWR(url_tv, fetcher);

  useEffect(() => {
    let suggestions = [];

    if (searchValue.length > 0 && data != null) {
      data?.results?.map((item) => {
        return (
          item.media_type === "movie" ||
          (item.media_type === "tv" && suggestions.push(item))
        );
      });

      // setSuggestData_movie(suggestions.slice(0, 5));
      // setSuggestData_movie(suggestions);
      setSuggestData_movie(data?.results?.slice(0, 5));
    } else {
      setSuggestData_movie(false);
    }

    if (searchValue.length > 0 && tvData != null) {
      setSuggestData_tv(tvData?.results?.slice(0, 5));
    } else {
      setSuggestData_tv(false);
    }
  }, [formValue, data, tvData]);

  const handleEnterInput = (e) => {
    e.preventDefault();
    let trimedVal = holderValue.trim();

    if (trimedVal.length !== 0 && suggestIndex === 0) {
      router.push(`/search/${trimedVal}/1`);
      setDisplaySuggest(false);
    }
  };

  const handleOnChangeInput = (e) => {
    let value = e.target.value;

    setFormVal(value);
    setDisplaySuggest(true);
  };

  const handleSuggestion = (value) => {
    setFormVal(value);
    setDisplaySuggest(false);
    setSuggestData_movie(false);
    setSuggestData_tv(false);
    router.push(`/search/${value}/1`);
  };

  const [suggestIndex, setSuggestIndex] = useState(0);

  const handleKeyDown = (event) => {
    let suggestions =
      (suggestData_movie.length > 0 || suggestData_tv.length > 0) &&
      suggestData_movie?.concat(suggestData_tv);

    if (event.key === "ArrowUp") {
      if (suggestIndex <= suggestions?.length && suggestIndex > 0) {
        setSuggestIndex((prev) => prev - 1);
      }
      // console.log({ suggestIndex }, "Up");
    } else if (event.key === "ArrowDown") {
      if (suggestIndex >= 0 && suggestIndex < suggestions?.length) {
        setSuggestIndex((prev) => prev + 1);
      }
      // console.log({ suggestIndex }, "Down");
    } else if (event.key === "Enter" && suggestIndex !== -1) {
      // let suggestions = suggestData_movie.concat(suggestData_tv);
      let type = "movies";
      if (suggestIndex >= 6) {
        type = "series";
      } else {
        type = "movies";
      }

      // console.log(`${suggestIndex} is entered.`);

      if (suggestIndex > 0 && suggestIndex <= suggestions.length) {
        console.log({ suggestIndex, length: suggestions.length });
        router.push(`/${type}/${suggestions[suggestIndex - 1].id}`);
      }
    }
  };

  return {
    formValue,
    displaySuggest,
    suggestData_movie,
    suggestData_tv,
    holderValue,
    suggestIndex,

    /* actions */
    setFormVal,
    handleEnterInput,
    handleOnChangeInput,
    handleSuggestion,
    setHolderValue,
    handleKeyDown,
  };
};

export default Hook;
