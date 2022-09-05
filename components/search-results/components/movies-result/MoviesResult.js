import React from 'react';

/* Hook */
import Hook from './hook.moviesResult';

const MoviesResult = ({
    query,
    page
}) => {
    console.log({query})

    const {
        data,
        error,
        isLoading
    } = Hook(query, page)


    console.log({data})
    return (
        <div>
            
        </div>
    );
}

export default MoviesResult;
