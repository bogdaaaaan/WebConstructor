import useStyle from './style/Form';
import clsx from 'clsx';
import React from 'react';

const Form = React.forwardRef(({
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classAll = clsx(
        className,
        classes.form,
        classes.ui,
        classes.position,
    );
    return <form 
        className = {classAll}
        ref = {ref}
        {...props}
    />
});

export default Form;