import e from './ElementCard.module.css';
import { ItemTypes } from '../../utils/ItemTypes.js';
import { useDrag } from 'react-dnd';

export const ElementCard = ({id}) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.TEXT,
		item: {
            id: id,
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

    return (
        <div ref={drag} className={e.wrapper}>
            {isDragging ? 'dragging' : 'no dragging'}
        </div>
    );
};
