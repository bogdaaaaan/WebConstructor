import { DnDBuilderHOC } from "build-ui";
import Input from "./Input";
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from "../../../../hooks/useDemoStyler";
import useStyle from './style/InputView';

const BuilderInput = DnDBuilderHOC(Input);

const InputView = ({
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
    return <BuilderInput
        // DnD Props
        onDragStart={!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd={!editor.meta.fixed && editor.handleDragEnd}
        draggable={!editor.meta.fixed}
        // Other Props
        onClick={editor.handleSelect}
        className={classes.view}
        // Input Props
        {...props}
        style={styler.completeStyle(props.style)}
    />
}

export default InputView;