import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Constructor } from './pages/Constructor/Constructor.jsx';

function App() {
    return (
        <div className='App'>
            <DndProvider backend={HTML5Backend}>
                <Constructor></Constructor>
            </DndProvider>
        </div>
    );
}

export default App;
