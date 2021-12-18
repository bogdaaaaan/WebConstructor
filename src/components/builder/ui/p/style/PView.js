import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {viewStyles} from "../../../styles/views";

const pStyles = ({
    view: ({

    }),
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    pStyles,
));

export default useStyle;
