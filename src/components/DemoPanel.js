import { Panel } from "build-ui";
import { CanvasPanel } from "./builder/ui/canvas";
import TextPanel from "./builder/ui/text/TextPanel";
import SectionPanel from "./builder/ui/section/SectionPanel";
import ImagePanel from "./builder/ui/image/ImagePanel";
import ButtonPanel from "./builder/ui/button/ButtonPanel";
import LinkPanel from "./builder/ui/link/LinkPanel";
import GridPanel from "./builder/ui/grid/GridPanel";
import InputPanel from "./builder/ui/input/InputPanel";
import DivPanel from "./builder/ui/div/DivPanel";
import FormPanel from "./builder/ui/form/FormPanel";
import HeaderPanel from "./builder/ui/header/HeaderPanel";

const DemoPanel = props => {
    const view = {
        Canvas: CanvasPanel,
        Text: TextPanel,
        Header: HeaderPanel,
        Section: SectionPanel,
        Div: DivPanel,
        Form: FormPanel,
        Image: ImagePanel,
        Button: ButtonPanel,
        Link: LinkPanel,
        Grid: GridPanel,
        Input: InputPanel,
    };
    return <Panel
        view={view}
        {...props}
    />
}

export default DemoPanel;