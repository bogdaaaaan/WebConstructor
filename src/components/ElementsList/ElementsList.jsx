import { ItemTypes } from '../../utils/ItemTypes.js';
import { ElementCard } from '../ElementCard/ElementCard.jsx';
import e from './ElementsList.module.css';

let elements = [
    ItemTypes.DIV,
    ItemTypes.SECTION,
    ItemTypes.P
]

export const ElementsList = () => {
    return (
        <div className={e.wrapper}>
            <div className={e.list}>
                {elements.map((el, index) => {
                    return(<ElementCard key={Math.floor(Math.random()*1000)} id={index} type={el}></ElementCard>)
                })}
            
            </div>
        </div>
    )
}
