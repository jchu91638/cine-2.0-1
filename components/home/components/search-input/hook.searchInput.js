import { useState } from 'react';
import { useRouter } from 'next/router';

const Hook = () => {
    const router = useRouter();

    const [ formValue , setFormValue ] = useState('');

    const enterHandler = (e) => {
        e.preventDefault();
        router.push(`/search/${formValue}/1`);
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
