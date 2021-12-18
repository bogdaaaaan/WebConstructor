import React from "react"
import { Workspace } from "build-ui"
import CanvasView from "./builder/ui/canvas/CanvasView"
import SectionView from "./builder/ui/section/SectionView"
import TextView from "./builder/ui/text/TextView"
import ImageView from "./builder/ui/image/ImageView"
import ButtonView from "./builder/ui/button/ButtonView"
import GridView from "./builder/ui/grid/GridView"
import BuilderSelector from "./BuilderSelector"
import AlertView from "./builder/ui/alert/AlertView"
import LinkView from "./builder/ui/link/LinkView"
import InputView from "./builder/ui/input/InputView"

const DemoWorkspace = props => {
    const view = {
        Canvas: CanvasView,
        Section: SectionView,
        Text: TextView,
        Image: ImageView,
        Button: ButtonView,
        Grid: GridView,
        Alert: AlertView,
        Link: LinkView,
        Input: InputView,
        
    }
    // Render BuilderSelector,  
    // in charge of adding event
    // listeners to document
    // to deselect views whenever
    // screen is clicked on and 
    // click is not a select operation.
    return <React.Fragment {...props}>
        <Workspace view={view} />
        <BuilderSelector />
    </React.Fragment>
}

export default DemoWorkspace;