import { branch, DnDBuilder, item, useTools } from 'build-ui'
import DashboardTwoTone from '@material-ui/icons/DashboardTwoTone';
import useStyle from './style/DivTools';
import clsx from 'clsx';

const DivTools = ({
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
        const divStyle = {
            width: 400,
            height: 200,
            backgroundColor: '#fafafa',
        }
        const divProps = {
            style: divStyle,
        }
        const div = item({
            type: 'Div',
            props: divProps
        })
        const data = branch(div);
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
        <DashboardTwoTone />
        <br></br>
        Div
    </DnDBuilder>
}

export default DivTools;