import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {viewStyles} from '../../../styles/views';

const formStyles = ({
    view: ({

    })
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    formStyles,
));

export default useStyle;