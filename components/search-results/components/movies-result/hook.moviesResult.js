import React from "react";
import Link from "next/link";

/* Action */
import { getSearchQueryResult } from "../../../../intensions";

const Hook = (query, pageNo) => {
  const { data, error, isLoading } = getSearchQueryResult({
    type: "movie",
    query,
    pageNo,
  });


  return {
    data,
    error,
    isLoading
  };
};

export default Hook;
