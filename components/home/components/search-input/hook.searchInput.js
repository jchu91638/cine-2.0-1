import { useState } from 'react';

const Hook = () => {

    const [ formValue , setFormValue ] = useState('');

    const enterHandler = (e) => {
        e.preventDefault();

        // console.log({formValue})
    }

    const changeHandler = (e) => {
        let value = e.target.value;

        setFormValue(value);
    }

    return {
        formValue,

        /* Actions */
        setFormValue,
        enterHandler,
        changeHandler
    }
}

export default Hook;
