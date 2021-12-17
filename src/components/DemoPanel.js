import { Panel } from "build-ui";
import { CanvasPanel } from "./builder/ui/canvas";
import TextPanel from "./builder/ui/text/TextPanel";
import SectionPanel from "./builder/ui/section/SectionPanel";
import ImagePanel from "./builder/ui/image/ImagePanel";
import AlertPanel from "./builder/ui/alert/AlertPanel"
import ButtonPanel from "./builder/ui/button/ButtonPanel";
import LinkPanel from "./builder/ui/link/LinkPanel";
import GridPanel from "./builder/ui/grid/GridPanel";

const DemoPanel = props => {
    const view = {
        Canvas: CanvasPanel,
        Text: TextPanel,
        Section: SectionPanel,
        Image: ImagePanel,
        Alert: AlertPanel,
        Button: ButtonPanel,
        Link: LinkPanel,
        Grid: GridPanel,
    };
    return <Panel
        view={view}
        {...props}
    />
}

export default DemoPanel;