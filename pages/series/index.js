import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Series = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/discover/series/popular");
  }, []);

  return <></>;
};

export default Series;
