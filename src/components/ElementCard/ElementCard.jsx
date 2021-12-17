import e from './ElementCard.module.css';
import { useDrag } from 'react-dnd';

export const ElementCard = ({id, type}) => {

    const [, drag] = useDrag({
        type: type,
		item: {
            id: id,
            type: type,
            unique_key: false
		}
	});

    return (
        <div ref={drag} className={e.wrapper}>
            {type}
        </div>
    );
};
