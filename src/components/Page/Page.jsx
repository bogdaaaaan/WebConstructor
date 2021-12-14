import p from './Page.module.css';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/ItemTypes.js';
import { useState, useEffect } from 'react';
import { Div } from '../Div/Div';

export const Page = () => {
    console.log('page');
    const [items, setItems] = useState([]);

    const [{isOver}, drop] = useDrop({
		accept: [ItemTypes.DIV, ItemTypes.SECTION],
		drop: (item, ) => {
            items[items.length] = item;
            setItems(items);
        },
        collect: (monitor) => ({
            isOver: !! monitor.isOver()
        })
	});



    return (
        <div ref={drop} className={p.wrapper}>
            {isOver}
            {items.map(el => {
                if (el.type === ItemTypes.DIV) return(<Div key={Math.floor(Math.random()*1000)} id={el.id} type={el.type}></Div>)
                
            })}
        </div>
    )
}
