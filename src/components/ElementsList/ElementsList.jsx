import { ElementCard } from '../ElementCard/ElementCard.jsx';
import e from './ElementsList.module.css';

export const ElementsList = () => {
    return (
        <div className={e.wrapper}>
            <div className={e.list}>
                <ElementCard id={Math.floor(Math.random()*1000)}></ElementCard>
                <ElementCard id={Math.floor(Math.random()*1000)}></ElementCard>
                <ElementCard id={Math.floor(Math.random()*1000)}></ElementCard>
                <ElementCard id={Math.floor(Math.random()*1000)}></ElementCard>

            </div>
        </div>
    )
}
