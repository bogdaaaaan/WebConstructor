import {makeStyles} from "@material-ui/core/styles";
import combineStyles from "../../../styles";
import {viewStyles} from "../../../styles/views";

const spanStyles = ({
    view: ({

    }),
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    spanStyles,
));

export default useStyle;
