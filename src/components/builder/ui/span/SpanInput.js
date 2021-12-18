import useStyle from './style/SpanInput';
import clsx from 'clsx';
import React from 'react';

const SpanInput = React.forwardRef(({
    children,
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classArea = clsx(
        classes.spanInput,
        classes.fill
    );
    const classAll = clsx(
        className,
        classes.ui
    );
    return <div 
        className = {classAll}
    >
        <textarea 
            ref = {ref}
            className = {classArea} 
            {...props}
        />
        {children}
    </div>

});

export default SpanInput;