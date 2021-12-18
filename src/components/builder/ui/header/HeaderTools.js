import {branch, DnDBuilder, item, useTools} from 'build-ui'
import useStyle from './style/HeaderTools';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import clsx from 'clsx';

const HeaderTools = ({
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
        const headerStyle = {
            color: '#000000',
            fontSize: 22,
            fontFamily: 'Arial',
        }
        const headerProps = {
            text: 'My Text',
            style: headerStyle,
        }
        const header = item({
            type: 'Header',
            props: headerProps
        });
        const data = branch(header);
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
        h1
    </DnDBuilder>
}

export default HeaderTools;