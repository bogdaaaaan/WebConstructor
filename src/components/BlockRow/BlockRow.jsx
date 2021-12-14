import b from './BlockRow.module.css';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { ItemTypes } from '../../utils/ItemTypes.js';

export const BlockRow = () => {
    console.log('yoooo')
    const [items, setItems] = useState([]);

    const [, drop] = useDrop({
		accept: ItemTypes.SECTION,
		drop: (item) => {
            setItems([...items, item]);
            console.log(items, ' dropped');
        }
	})
    
    return (
        <div ref={drop} className={b.wrapper}>
            {items.map(el => {
                if (el.type === ItemTypes.SECTION) return(<section key={Math.floor(Math.random()*1000)} style={{border: '1px solid red', width: '100%', height: 50}}>aboba</section>);
                return el;
            })}
        </div>
    )
}