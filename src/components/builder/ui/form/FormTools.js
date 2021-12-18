import { branch, DnDBuilder, item, useTools } from 'build-ui'
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import useStyle from './style/FormTools';
import clsx from 'clsx';

const FormTools = ({
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
        const formStyle = {
            width: 400,
            height: 200,
            backgroundColor: '#fafafa',
        }
        const formProps = {
            style: formStyle,
        }
        const form = item({
            type: 'Form',
            props: formProps
        })
        const data = branch(form);
        tools.triggerDragStart({
            data: data,
        });
    }
    return <DnDBuilder
        onDragStart={handleDragTool}
        onDragEnd={tools.handleDragEnd}
        draggable={true}
        className={classAll}
        {...rest}
    >
        <DynamicFeed/>
        <br></br>
        Form
    </DnDBuilder>
}

export default FormTools;