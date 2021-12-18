import useStyle from './style/Div';
import clsx from 'clsx';
import React from 'react';

const Div = React.forwardRef(({
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classAll = clsx(
        className,
        classes.div,
        classes.ui,
        classes.position,
    );
    return <div 
        className = {classAll}
        ref = {ref}
        {...props}
    />
});

export default Div;