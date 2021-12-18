import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {viewStyles} from "../../../styles/views";

const headerStyles = ({
    view: ({

    }),
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    headerStyles,
));

export default useStyle;
