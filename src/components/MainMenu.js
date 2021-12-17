import Button from "@material-ui/core/Button";
import DemoBuilder from './DemoBuilder';
import BuilderGrid from './layout/BuilderGrid';

import { useState, useRef, useEffect } from "react";

const MainMenu = () => {
    const inputFile = useRef(null) 
    const [clicked, setClicked] = useState('');
    const [layout, setLayout] = useState('');
    const [localLayouts, setLocalLayouts] = useState('');

    const create_new = () => {
        setClicked('new');
    }

    const load_file = () => {
        inputFile.current.click();
    }

    const load_storage = () => {
        let pages = JSON.parse(localStorage.getItem('pages'));
        setLocalLayouts(pages);
    }

    const handleLoad = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setLayout(JSON.parse(e.target.result));
        };
    }

    useEffect(() => {
        if (layout) {
            setClicked('load')
        };
    }, [layout, setLayout])

    return (
        <div>           
            <input type='file' id='file' ref={inputFile} onChange={handleLoad} style={{display: 'none'}}/>
            {clicked === '' ? 
            <div>
                <Button onClick={create_new}>Create New Project</Button>
                <Button onClick={load_file}>Load Project From File</Button>
                <Button onClick={load_storage}>Load Project From Backups</Button>
                {localLayouts ? <div>
                    
                    {localLayouts.map((el, indx) => {
                            return (<>
                                <div key={indx}>Previously worked layout: {JSON.parse(el).root}</div>
                                <Button onClick={() => {
                                    for (let i = 0; i < localLayouts.length; i++) {
                                        const element = localLayouts[i];
                                        if (JSON.parse(element).root === JSON.parse(el).root) {
                                            setLayout(JSON.parse(element));
                                        }
                                    } 
                                }}>Select {JSON.parse(el).root}</Button>
                                </>)
                        })}
                </div> : 'There is no backups for projects'}
            </div>
            
            : ''}
            
            {clicked === 'new' ?
            <DemoBuilder>
                <BuilderGrid />
            </DemoBuilder>
            : ''}

            {clicked === 'load' ?
            <DemoBuilder demo={layout}>
                <BuilderGrid/>
            </DemoBuilder>
            : ''}
            
        </div>
    )
}

export default MainMenu;