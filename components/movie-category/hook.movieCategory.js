import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from "swr";

/* Constants */
import { movieCategoryList } from '../../constants/common';

const Hook = () => {

    const [ activeCategory , setActiveCategory ] = useState('popular');

    const router = useRouter()
    let currentCategory =  router.query['category'];

    let chosenCategory = movieCategoryList?.filter((item) => {
        return currentCategory === item.title
    });

    let categoryUrl = `https://api.themoviedb.org/3/${chosenCategory[0]?.url}`

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR(categoryUrl, fetcher); 
    
    return {
        activeCategory, 
        currentCategory,
        data,
        error,

        /* actions */
        setActiveCategory
    }
}

export default Hook;


