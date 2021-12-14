import d from './Div.module.css';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { ItemTypes } from '../../utils/ItemTypes.js';

export const Div = () => {
    console.log('yoooo')
    const [items, setItems] = useState();

    const [, drop] = useDrop({
		accept: ItemTypes.SECTION,
		drop: (item, monitor) => {
            
            items.push(item);
            console.log(items, ' dropped');
        }
	})
    
    return (
        <div ref={drop} className={d.wrapper}>
            {items.map(el => {
                if (el.type === ItemTypes.SECTION) return(<section key={Math.floor(Math.random()*1000)} style={{border: '1px solid red', width: '100%', height: 50}}>aboba</section>);
                
            })}
        </div>
    )
}