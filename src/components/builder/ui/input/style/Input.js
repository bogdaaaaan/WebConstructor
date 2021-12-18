import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {fillStyles, flexStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const inputStyles = ({
    input: props => ({
        padding: props.padding,
        margin: props.margin,
    }),
})

const useStyle = makeStyles(combineStyles(
    inputStyles,
    sizingStyles,
    positionStyles,
    flexStyles,
    fillStyles,
));

export default useStyle;