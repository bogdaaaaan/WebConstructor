import {makeStyles} from '@material-ui/core/styles'
import combineStyles from '../../../styles/combine';

export const workspaceStyles = theme => ({
    workspace: ({
        [theme.breakpoints.up('md')]: ({
            height: '100%',
            width: '100%',
            overflow: 'auto',
        }),
        [theme.breakpoints.down('md')]: ({
            height: 1200,
            width: '100%',
            overflow: 'auto',
        }),
        [theme.breakpoints.down('lg')]: ({
            height: 1000,
            width: '100%',
            overflow: 'auto',
        }),
    })
})

const useStyle = makeStyles(combineStyles(
    workspaceStyles,
));

export default useStyle;