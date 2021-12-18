import ImageTools from "./builder/ui/image/ImageTools"
import SectionTools from "./builder/ui/section/SectionTools"
import DivTools from "./builder/ui/div/DivTools"
import GridTools from "./builder/ui/grid/GridTools"
import TextTools from "./builder/ui/text/TextTools"
import ButtonTools from "./builder/ui/button/ButtonTools"
import LinkTools from "./builder/ui/link/LinkTools"
import InputTools from "./builder/ui/input/InputTools"
import useStyle from "./style/ToolBar";
import clsx from "clsx"

const ToolBar = props => {
    const classes = useStyle();
    const classAll = clsx(
        classes.tools,
        props.className,
    )
    return <div 
        {...props}
        className = {classAll}
    >
        <SectionTools className = {classes.tool_item} />
        <DivTools className = {classes.tool_item} />
        <GridTools className = {classes.tool_item} />
        <TextTools className = {classes.tool_item} />
        <ImageTools className = {classes.tool_item} />
        <ButtonTools className = {classes.tool_item} />
        <LinkTools className = {classes.tool_item} />
        <InputTools className = {classes.tool_item}/>

    </div>;
}

export default ToolBar;