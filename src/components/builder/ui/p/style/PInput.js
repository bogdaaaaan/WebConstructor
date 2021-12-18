import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {fillStyles, flexStyles, positionStyles, sizingStyles} from "../../../styles/ui";
import {pStyles} from './P';

const pInputStyles = ({
    pInput: props => ({
        ...pStyles.p(props),
        resize: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        '&:focus': {
            outline: 'none'
        }
    }),
})

const useStyle = makeStyles(combineStyles(
    pInputStyles,
    positionStyles,
    sizingStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;