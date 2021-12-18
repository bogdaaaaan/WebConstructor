import { branch, DnDBuilder, item, useTools } from 'build-ui'
import ImageIcon from '@material-ui/icons/Image';
import useStyle from './style/ImageTools';
import clsx from 'clsx';

const ImageTools = ({
    className,
    ...rest
}) => {
    const classes = useStyle();
    const classAll = clsx(
        classes.tool,
        className,
    );
    const tools = useTools();
    const handleDragTool = () => {
        const imageStyle = {
            width: 200,
            height: 172,
        }
        const imageProps = {
            src: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
            style: imageStyle,
        }
        const image = item({
            type: 'Image',
            props: imageProps
        });
        const data = branch(image);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart={handleDragTool}
        onDragEnd={tools.handleDragEnd}
        draggable={true}
        className={classAll}
        {...rest}
    >
        <ImageIcon />
        <br></br>
        Image
    </DnDBuilder>
}

export default ImageTools;