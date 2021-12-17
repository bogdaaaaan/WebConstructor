import p from './Page.module.css';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/ItemTypes.js';
import { useState, useEffect } from 'react';
import { Div } from '../Div/Div';
export const Page = () => {
    const [items, setItems] = useState([]);
    
    const [, drop] = useDrop({
		accept: [ItemTypes.DIV, ItemTypes.SECTION],
		drop: (item) => {
            setItems([...items, item]);
        }
	});


    return (
        <div ref={drop} className={p.wrapper}>
            {items.map(el => {
                if (el.type === ItemTypes.DIV) return(<Div key={Math.floor(Math.random()*1000)} id={el.id} type={el.type}></Div>)
                if (el.type === ItemTypes.SECTION) return(<section key={Math.floor(Math.random()*1000)} id={el.id} type={el.type}></section>)
            })}
        </div>
    )
}
