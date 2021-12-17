import s from './Section.module.css';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { ItemTypes } from '../../utils/ItemTypes.js';
import { P } from '../P/P';

export const Section = () => {
    const [items, setItems] = useState([]);

    const [, drop] = useDrop({
		accept: [ItemTypes.P],
		drop: (item) => {
            setItems([...items, item]);
        }
	})
    
    return (
        <section ref={drop} className={s.wrapper}>
            {items.map(el => {
                if (el.type === ItemTypes.P) return(<P key={Math.floor(Math.random()*1000)}></P>);
            })}
        </section>
    )
}