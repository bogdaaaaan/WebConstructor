import {branch, DnDBuilder, item, useTools} from 'build-ui'
import useStyle from './style/PTools';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import clsx from 'clsx';

const PTools = ({
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
        const pStyle = {
            color: '#000000',
            fontSize: 22,
            fontFamily: 'Arial',
        }
        const pProps = {
            text: 'My P Text',
            style: pStyle,
        }
        const p = item({
            type: 'P',
            props: pProps
        });
        const data = branch(p);
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
        p
    </DnDBuilder>
}

export default PTools;