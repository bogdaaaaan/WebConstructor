import DemoBuilder from './components/DemoBuilder';
import BuilderGrid from './components/layout/BuilderGrid';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        window.addEventListener('beforeunload', alertUser);
        return () => {
            window.removeEventListener('beforeunload', alertUser);
        };
    }, []);
    const alertUser = e => {
        e.preventDefault();
        e.returnValue = '';
    };

    return (
        <div>
            <DemoBuilder>
                <BuilderGrid />
            </DemoBuilder>
        </div>
    );
};

export default App;
