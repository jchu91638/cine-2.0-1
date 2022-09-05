import React, { useEffect } from "react";

import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const pageNo = router.query["pageNo"];
  const searchQuery = router.query["searchQuery"];



  useEffect(() => {
    searchQuery && router.push(`${router.asPath}/1`);
  }, [searchQuery, pageNo]);



  return <div></div>;
};

export default Index;
