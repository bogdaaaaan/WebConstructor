import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {fillStyles, flexStyles, positionStyles, sizingStyles} from "../../../styles/ui";

export const spanStyles = ({
    span: props => ({
        color: props.color,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        textAlign: props.textAlign,
        margin: props.margin || 0,
        padding: props.padding || 0,
    }),
})

const useStyle = makeStyles(combineStyles(
    spanStyles,
    sizingStyles,
    positionStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;