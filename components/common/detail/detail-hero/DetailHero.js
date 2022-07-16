import React from 'react';

const DetailHero = ({
    data ,
    error,
    loading ,

    title ,
}) => {

    return (
        <section>
            <h1>
                {title}
            </h1>
        </section>
    );
}

export default DetailHero;
