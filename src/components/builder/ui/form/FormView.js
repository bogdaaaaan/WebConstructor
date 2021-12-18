import {DnDBuilderHOC} from 'build-ui'
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from '../../../../hooks/useDemoStyler';
import Resizable from '../../../resize/Resizable';
import Form from './Form';
import useStyle from './style/FormView';

const ResizableForm = Resizable(Form);
const BuilderForm = DnDBuilderHOC(ResizableForm);

const FormView = ({
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
    return <BuilderForm
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
        // Form Props
        {...props}
        style = {styler.completeStyle(props.style)}
    />
}

export default FormView;