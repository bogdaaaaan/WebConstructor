import useStyle from './style/Header';
import clsx from 'clsx';
import React from 'react';

const Header = React.forwardRef(({
    children,
    className,
    style,
    text,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classHeader = clsx(
        classes.header,
        classes.fill,
    );
    const classAll = clsx(
        className,
        classes.ui,
    )
    return <div
        className = {classAll}
    >
        <h1 
            ref = {ref}
            className = {classHeader}
            {...props}
        >
            {text}
        </h1>
        {children}
    </div>
});

export default Header;