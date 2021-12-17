import d from './Div.module.css';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { ItemTypes } from '../../utils/ItemTypes.js';

export const Div = () => {
    const [items, setItems] = useState([]);

    const [, drop] = useDrop({
		accept: [ItemTypes.SECTION],
		drop: (item) => {
            setItems([...items, item]);
        }
	})
    
    return (
        <div ref={drop} className={d.wrapper}>
            {items.map(el => {
                if (el.type === ItemTypes.SECTION) return(<section key={Math.floor(Math.random()*1000)}>aboba</section>);
            
            })}
        </div>
    )
}