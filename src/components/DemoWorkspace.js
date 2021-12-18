import React from "react"
import { Workspace } from "build-ui"
import CanvasView from "./builder/ui/canvas/CanvasView"
import SectionView from "./builder/ui/section/SectionView"
import TextView from "./builder/ui/text/TextView"
import ImageView from "./builder/ui/image/ImageView"
import ButtonView from "./builder/ui/button/ButtonView"
import GridView from "./builder/ui/grid/GridView"
import BuilderSelector from "./BuilderSelector"
import LinkView from "./builder/ui/link/LinkView"
import InputView from "./builder/ui/input/InputView"
import DivView from "./builder/ui/div/DivView"
import FormView from "./builder/ui/form/FormView"
import HeaderView from "./builder/ui/header/HeaderView"

const DemoWorkspace = props => {
    const view = {
        Canvas: CanvasView,
        Section: SectionView,
        Form: FormView,
        Div: DivView,
        Text: TextView,
        Header: HeaderView,
        Image: ImageView,
        Button: ButtonView,
        Grid: GridView,
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