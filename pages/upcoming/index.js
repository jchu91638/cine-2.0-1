import React, { useEffect } from "react";
import { useRouter } from "next/router";

const UpComingIndex = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/upcoming/1");
  }, []);

  return <div></div>;
};

export default UpComingIndex;
