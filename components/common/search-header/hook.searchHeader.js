import { useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

const Hook = () => {
  const [displaySuggest, setDisplaySuggest] = useState(false);
  const [formValue, setFormVal] = useState("");
  const [suggestData, setSuggestData] = useState(null);

  const router = useRouter();

  let url;
  if (formValue.length === 0) {
    url = `https://api.themoviedb.org/3/search/multi?api_key=68d49bbc8d40fff0d6cafaa7bfd48072&query=demo`;
  } else {
    url = `https://api.themoviedb.org/3/search/multi?api_key=68d49bbc8d40fff0d6cafaa7bfd48072&query=${formValue}`;
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    let suggestions = [];

    if (formValue.length > 0 && data != null) {
      data?.results?.map((item) => {
        return item.title
          ? suggestions.push(item.title)
          : suggestions.push(item.name);
      });

      console.log({ suggestions });
      setSuggestData(suggestions.slice(0, 5));
    } else {
      setSuggestData(false);
    }
  }, [formValue, data]);

  const handleEnterInput = (e) => {
    e.preventDefault();
    router.push(`/search/${formValue}/1`);
    setDisplaySuggest(false);
  };

  const handleOnChangeInput = (e) => {
    let value = e.target.value;

    setFormVal(value);
    setDisplaySuggest(true);
  };

  const handleSuggestion = (value) => {
    setFormVal(value);
    setDisplaySuggest(false);
    setSuggestData(false);
    router.push(`/search/${value}/1`);
  };

  return {
    formValue,
    displaySuggest,
    suggestData,

    /* actions */
    setFormVal,
    handleEnterInput,
    handleOnChangeInput,
    handleSuggestion,
  };
};

export default Hook;
