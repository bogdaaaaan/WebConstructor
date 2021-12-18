import useStyle from './style/Span';
import clsx from 'clsx';
import React from 'react';

const Span = React.forwardRef(({
    children,
    className,
    style,
    text,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classSpan = clsx(
        classes.span,
        classes.fill,
    );
    const classAll = clsx(
        className,
        classes.ui,
    )
    return <div
        className = {classAll}
    >
        <span 
            ref = {ref}
            className = {classSpan}
            {...props}
        >
            {text}
        </span>
        {children}
    </div>
});

export default Span;