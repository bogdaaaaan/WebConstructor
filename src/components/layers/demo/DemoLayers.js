import Layers from "../Layers"
import LayerDraggable from "./LayerDraggable";
import LayerDroppable from "./LayerDroppable";

const DemoLayers = () => {
    const view = {
        Canvas: LayerDroppable,
        Section: LayerDroppable,
        Div: LayerDroppable,
        Form: LayerDroppable,
        Image: LayerDraggable,
        Text: LayerDraggable,
        Header: LayerDraggable,
        Button: LayerDraggable,
        Link: LayerDraggable,
        Grid: LayerDroppable,
        Input: LayerDraggable
    }
    return <Layers view = {view} />
}

export default DemoLayers;