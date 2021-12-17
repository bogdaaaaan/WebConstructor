import p from './Page.module.css';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/ItemTypes.js';
import { useState, useEffect, useCallback } from 'react';
import { Div } from '../Div/Div';
import { Section } from '../Section/Section';
import { P } from '../P/P';
import update from 'immutability-helper';

export const Page = () => {
    const [items, setItems] = useState([
        {id: 0, type: 'div', unique_key: 9382}
    ]);
    
    const [, drop] = useDrop({
		accept: [ItemTypes.DIV, ItemTypes.SECTION, ItemTypes.P],
		drop: (item, monitor) => {
            // if (item.unique_key) return;
            // item.unique_key = true;
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            setItems([...items], {id: item.id, left: left, top: top});
            //setItems([...items, item]);
        }
	});

    const moveElement = useCallback((id, left, top) => {
        

    }, [items, setItems]);

    return (
        <div ref={drop} className={p.wrapper}>
            {items.map(el => {
                if (el.type === ItemTypes.DIV) return(<Div key={Math.floor(Math.random()*1000)} id={el.id} type={el.type}></Div>)
                if (el.type === ItemTypes.SECTION) return(<Section key={Math.floor(Math.random()*1000)} id={el.id} type={el.type}></Section>)
                if (el.type === ItemTypes.P) return(<P key={Math.floor(Math.random()*1000)} id={el.id} type={el.type} unique_key={el.unique_key} left={el.left} top={el.top}></P>)
                
            })}
        </div>
    )
}
