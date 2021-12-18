import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles';
import {viewStyles} from '../../../styles/views';

const divStyles = ({
    view: ({

    })
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    divStyles,
));

export default useStyle;