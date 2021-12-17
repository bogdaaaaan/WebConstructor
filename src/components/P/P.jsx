import p from './P.module.css';
import { useDrag } from 'react-dnd';

export const P = ({id, type, unique_key, left, top}) => {

    const [{isDragging}, drag] = useDrag({
        type: type,
		item: {
            id: id,
            type: type,
            left: top,
            top: top,
            unique_key: unique_key
		},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
	}, [id, left, top]);


    return (
        <p ref={drag} className={p.wrapper} style={{left, top}}>
            {type}
        </p>
    );
};
