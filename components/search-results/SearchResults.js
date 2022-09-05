import React from 'react';

/* Components */
import {SearchHeader} from '../common';
import MoviesResult from './components/movies-result/MoviesResult';
import SeriesResult from './components/series-result/SeriesResult';
import SearchAside from './components/search-aside/SearchAside';

/* Hook */
import Hook from './hook.searchResults';

const SearchResults = () => {

    const {
        searchQuery,
        pageNo
    } = Hook();
    
    return (
        <>
            <SearchHeader query={searchQuery}/>
            <section>
                <div>
                    <MoviesResult query={searchQuery} page={pageNo}/>
                    <SeriesResult query={searchQuery} page={pageNo}/>
                </div>
                <SearchAside/>
            </section>
        </>
    );
}

export default SearchResults;
