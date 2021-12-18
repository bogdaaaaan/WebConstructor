import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {fillStyles, flexStyles, positionStyles, sizingStyles} from "../../../styles/ui";
import {headerStyles} from './Header';

const headerInputStyles = ({
    headerInput: props => ({
        ...headerStyles.header(props),
        resize: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        '&:focus': {
            outline: 'none'
        }
    }),
})

const useStyle = makeStyles(combineStyles(
    headerInputStyles,
    positionStyles,
    sizingStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;