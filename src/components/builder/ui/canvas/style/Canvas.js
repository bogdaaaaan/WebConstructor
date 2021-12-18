import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';

const canvasStyles = ({
    canvas: props => ({
        width: props.width ? props.width : '100%',
        height: props.height ? props.height : '100%',
        position: 'relative',
        backgroundColor: props.backgroundColor,
    }),
})

const useStyle = makeStyles(combineStyles(
    canvasStyles,
));

export default useStyle;