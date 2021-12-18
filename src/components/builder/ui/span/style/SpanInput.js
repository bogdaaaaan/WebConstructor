import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {fillStyles, flexStyles, positionStyles, sizingStyles} from "../../../styles/ui";
import {spanStyles} from './Span';

const spanInputStyles = ({
    spanInput: props => ({
        ...spanStyles.span(props),
        resize: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        '&:focus': {
            outline: 'none'
        }
    }),
})

const useStyle = makeStyles(combineStyles(
    spanInputStyles,
    positionStyles,
    sizingStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;