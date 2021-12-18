import {DnDBuilderHOC} from 'build-ui'
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from '../../../../hooks/useDemoStyler';
import Resizable from '../../../resize/Resizable';
import Div from './Div';
import useStyle from './style/DivView';

const ResizableDiv = Resizable(Div);
const BuilderDiv = DnDBuilderHOC(ResizableDiv);

const DivView = ({
    id,
    ...props
}) => {
    const editor = useDemoEditor({
        id: id,
    });
    const styler = useDemoStyler({
        id: id
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        hovering: editor.hovering,
        fixed: editor.meta.fixed,
    });
    return <BuilderDiv
        // DnD Props 
        onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
        onDrop = {editor.handlePositionedDrop}
        onDragEnter = {editor.handlePaintDropZone}
        onDragLeave = {editor.handleEraseDropZone}
        draggable = {!editor.meta.fixed}
        // Resize Props
        isResizing = {editor.indexes.selected}
        onResizeStart = {editor.handleResizeStart}
        onResize = {editor.handleResize}
        onResizeEnd = {editor.handleResizeEnd}
        // Pass down ref for
        // resize numerical 
        // calculations
        ref = {editor.builder}
        // Other Props
        onClick = {editor.handleSelect}
        className = {classes.view} 
        // Div Props
        {...props}
        style = {styler.completeStyle(props.style)}
    />
}

export default DivView;