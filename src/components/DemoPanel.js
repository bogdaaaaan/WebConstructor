import { Panel } from "build-ui";
import { CanvasPanel } from "./builder/ui/canvas";
import SectionPanel from "./builder/ui/section/SectionPanel";
import ImagePanel from "./builder/ui/image/ImagePanel";
import ButtonPanel from "./builder/ui/button/ButtonPanel";
import LinkPanel from "./builder/ui/link/LinkPanel";
import GridPanel from "./builder/ui/grid/GridPanel";
import InputPanel from "./builder/ui/input/InputPanel";
import DivPanel from "./builder/ui/div/DivPanel";
import FormPanel from "./builder/ui/form/FormPanel";
import HeaderPanel from "./builder/ui/header/HeaderPanel";
import SpanPanel from "./builder/ui/span/SpanPanel";
import PPanel from "./builder/ui/p/PPanel";

const DemoPanel = props => {
    const view = {
        Canvas: CanvasPanel,
        Header: HeaderPanel,
        Span: SpanPanel,
        P: PPanel,
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