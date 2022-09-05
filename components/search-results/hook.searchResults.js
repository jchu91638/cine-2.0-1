import React from 'react';
import { useRouter } from 'next/router';

const Hook = () => {

    const router = useRouter();

    const pageNo = router.query["pageNo"];
    const searchQuery = router.query["searchQuery"];

    return {
        searchQuery,
        pageNo
    }
}

export default Hook;
