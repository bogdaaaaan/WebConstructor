import { DnDBuilderHOC } from "build-ui";
import Resizable from "../../../resize/Resizable";
import Button from "./Button";
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from "../../../../hooks/useDemoStyler";
import useStyle from './style/ButtonView';


const ResizableButton = Resizable(Button);
const BuilderButton = DnDBuilderHOC(ResizableButton);

const ButtonView = ({
    id,
    ...props
}) => {
    const editor = useDemoEditor({
        id: id
    });
    const styler = useDemoStyler({
        id: id
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        fixed: editor.meta.fixed,
    });
    return <BuilderButton
        // DnD Props
        onDragStart={!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd={!editor.meta.fixed && editor.handleDragEnd}
        draggable={!editor.meta.fixed}
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
        onClick={editor.handleSelect}
        className={classes.view}
        // Button Props
        {...props}
        style={styler.completeStyle(props.style)}
    />
}

export default ButtonView;