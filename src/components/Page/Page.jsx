import p from './Page.module.css';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/ItemTypes.js';

export const Page = () => {
    const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.TEXT,
		drop: (item, monitor) => console.log(item),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

    return (
        <div ref={drop} className={p.wrapper}>
            {isOver ? 'over' : 'not over'}
        </div>
    )
}
