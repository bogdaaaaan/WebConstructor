import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../../../styles/combine';
import {viewStyles} from '../../../styles/views';

const canvasStyles = ({
    view: ({
        overflow: 'hidden',
    }),
});

const useStyle = makeStyles(combineStyles(
    viewStyles,
    canvasStyles,
));

export default useStyle;