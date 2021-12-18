import {branch, DnDBuilder, item, useTools} from 'build-ui'
import useStyle from './style/SpanTools';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import clsx from 'clsx';

const SpanTools = ({
    className,
    ...rest
}) => {
    const classes = useStyle();
    const classAll = clsx(
        classes.tool,
        className,
    );
    const tools = useTools();
    const handleDragTool = () => {
        const spanStyle = {
            color: '#000000',
            fontSize: 22,
            fontFamily: 'Arial',
        }
        const spanProps = {
            text: 'My Span Text',
            style: spanStyle,
        }
        const span = item({
            type: 'Span',
            props: spanProps
        });
        const data = branch(span);
        tools.triggerDragStart({
            data: data
        })
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        className = {classAll}
        draggable = {true}
        {...rest}
    >
        <TextFieldsIcon />
        <br></br>
        span
    </DnDBuilder>
}

export default SpanTools;