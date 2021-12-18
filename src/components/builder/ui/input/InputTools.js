import { branch, DnDBuilder, item, useTools } from "build-ui";
import useStyle from './style/InputTools';
import Input from "@material-ui/icons/Input";
import clsx from "clsx";

const InputTools = ({
    className,
    ...rest
}) => {
    const classes = useStyle();
    const classAll = clsx(
        classes.tool,
        className,
    );
    const tools = useTools();
    const handleDragStart = () => {
        const inputProps = {
            text: 'Placeholder',
            color: 'primary',
            variant: 'contained',
            style: {}
        };
        const input = item({
            type: 'Input',
            props: inputProps
        })
        const data = branch(input);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart={handleDragStart}
        onDragEnd={tools.handleDragEnd}
        draggable={true}
        className={classAll}
        {...rest}
    >
        <Input />
        <br></br>
        Input
    </DnDBuilder>
}

export default InputTools;