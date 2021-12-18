import MainMenu from './components/MainMenu';
import { useEffect } from 'react';

const styles = {
    wrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const App = () => {
    // useEffect(() => {
    //     window.addEventListener('beforeunload', alertUser);
    //     return () => {
    //         window.removeEventListener('beforeunload', alertUser);
    //     };
    // }, []);
    // const alertUser = e => {
    //     e.preventDefault();
    //     e.returnValue = '';
    // };

    return (
        <div style={styles.wrapper}>
          <MainMenu/>
        </div>
    );
};

export default App;
