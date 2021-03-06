import ImageTools from "./builder/ui/image/ImageTools"
import SectionTools from "./builder/ui/section/SectionTools"
import DivTools from "./builder/ui/div/DivTools"
import GridTools from "./builder/ui/grid/GridTools"
import HeaderTools from "./builder/ui/header/HeaderTools"
import ButtonTools from "./builder/ui/button/ButtonTools"
import LinkTools from "./builder/ui/link/LinkTools"
import InputTools from "./builder/ui/input/InputTools"
import FormTools from "./builder/ui/form/FormTools"
import useStyle from "./style/ToolBar";
import clsx from "clsx"
import SpanTools from "./builder/ui/span/SpanTools"
import PTools from "./builder/ui/p/PTools"

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
        <FormTools className = {classes.tool_item} />
        <GridTools className = {classes.tool_item} />
        <HeaderTools className = {classes.tool_item} />
        <SpanTools className = {classes.tool_item} />
        <PTools className = {classes.tool_item} />
        <ImageTools className = {classes.tool_item} />
        <ButtonTools className = {classes.tool_item} />
        <LinkTools className = {classes.tool_item} />
        <InputTools className = {classes.tool_item}/>

    </div>;
}

export default ToolBar;