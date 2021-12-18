import { Panel } from "build-ui";
import { CanvasPanel } from "./builder/ui/canvas";
import TextPanel from "./builder/ui/text/TextPanel";
import SectionPanel from "./builder/ui/section/SectionPanel";
import ImagePanel from "./builder/ui/image/ImagePanel";
import AlertPanel from "./builder/ui/alert/AlertPanel"
import ButtonPanel from "./builder/ui/button/ButtonPanel";
import LinkPanel from "./builder/ui/link/LinkPanel";
import GridPanel from "./builder/ui/grid/GridPanel";
import InputPanel from "./builder/ui/input/InputPanel";
import DivPanel from "./builder/ui/div/DivPanel";

const DemoPanel = props => {
    const view = {
        Canvas: CanvasPanel,
        Text: TextPanel,
        Section: SectionPanel,
        Div: DivPanel,
        Image: ImagePanel,
        Alert: AlertPanel,
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