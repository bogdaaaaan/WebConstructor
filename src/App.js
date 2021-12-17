import MainMenu from './components/MainMenu';
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
          <MainMenu>
            
          </MainMenu>
        </div>
    );
};

export default App;
