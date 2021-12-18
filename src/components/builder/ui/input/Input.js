import MUIInput from "@material-ui/core/Input"
import clsx from "clsx";
import React from "react";
import useStyle from './style/Input'

const Input = React.forwardRef(({
    text,
    style,
    className,
    children,
    ...rest
}, ref) => {
    const classes = useStyle(style);
    const classInput = clsx(
        classes.input,
        classes.fill
    );
    const classAll = clsx(
        className,
        classes.ui
    );
    return <div
        className={classAll}
    >
        <MUIInput
            ref={ref}
            className={classInput}
            {...rest}
            placeholder={text}
        >

        </MUIInput>
        {children}
    </div>
});

export default Input;