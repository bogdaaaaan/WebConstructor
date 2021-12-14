import { ElementsList } from '../../components/ElementsList/ElementsList.jsx';
import { Page } from '../../components/Page/Page.jsx';
import { ElementValues } from '../../components/ElementValues/ElementValues.jsx';
import c from './Constructor.module.css';

export const Constructor = () => {
    return (
        <div className={c.wrapper}>
            <ElementsList></ElementsList>
            <Page></Page>
            <ElementValues></ElementValues>
        </div>
    );
};
