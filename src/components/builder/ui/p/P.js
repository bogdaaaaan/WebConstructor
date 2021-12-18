import useStyle from './style/P';
import clsx from 'clsx';
import React from 'react';

const P = React.forwardRef(({
    children,
    className,
    style,
    text,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classP = clsx(
        classes.p,
        classes.fill,
    );
    const classAll = clsx(
        className,
        classes.ui,
    )
    return <div
        className = {classAll}
    >
        <p 
            ref = {ref}
            className = {classP}
            {...props}
        >
            {text}
        </p>
        {children}
    </div>
});

export default P;