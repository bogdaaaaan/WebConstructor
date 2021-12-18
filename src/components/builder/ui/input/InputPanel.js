import React from "react";
import { Select } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useDemoEditor from "../../../../hooks/useDemoEditor";
import useDemoStyler from "../../../../hooks/useDemoStyler";
import useStyle from './style/InputPanel';
import SizingPanel from "../../panels/SizingPanel";
import SpacingPanel from "../../panels/SpacingPanel";
import PositionPanel from "../../panels/PositionPanel";
import FlexItemPanel from "../../panels/FlexItemPanel";

const InputPanel = ({
    id,
}) => {
    const editor = useDemoEditor({
        id: id,
    });
    const styler = useDemoStyler({
        id: id,
    })
    const classes = useStyle();
    return <div>
        
        <div className = {classes.field}>
        <label 
            htmlFor = 'text'
            className = {classes.label}
        >
            Input Placeholder
        </label>
        <TextField
            variant = 'outlined'
            name = 'text'
            id = 'text'
            value = {editor.props.text}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>


        <div className = {classes.field}>
        <label
            htmlFor = 'color'
            className = {classes.label}
        >
            Type
        </label>
        <Select
            variant = 'outlined'
            native = {true} 
            value = {editor.props.color}
            id = 'color'
            name = 'color' 
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'primary'>
                Primary
            </option>
            <option value = 'secondary'>
                Secondary
            </option>
        </Select>
        </div>

        {styler.styles.flexItem && <FlexItemPanel id = {id} />}
        <SizingPanel id = {id} />
        <SpacingPanel id = {id} />
        <PositionPanel id = {id} />

    </div>
}

export default InputPanel;