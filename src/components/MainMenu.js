
import { Card, Button, CardContent, CardActions } from "@material-ui/core";
import DemoBuilder from './DemoBuilder';
import BuilderGrid from './layout/BuilderGrid';
import { generateKey } from '../utils/unique.js';
import { useState, useRef, useEffect } from "react";

const styles = {
    card: {
        maxWidth: '300px',
        marginTop: '25px',
        border: '1px solid black'
    },
    card_holder: {
        maxHeight: '600px',
        overflowY: 'scroll',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '1200px',
        padding: '0 25px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff'
    },
    wrapper_center: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        justifyContent: 'center'
    },
    btn: {
        background: '#000',
        color: '#fff'
    }
    
};

const MainMenu = () => {
    const inputFile = useRef(null) 
    const [pages, setPages] = useState(JSON.parse(localStorage.getItem('pages')));
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
        <div style={styles.wrapper}>
            <input type='file' id='file' ref={inputFile} onChange={handleLoad} style={{display: 'none'}}/>
            {clicked === '' ? 
                <div style={styles.wrapper_center}>
                    <h1>WEB CONSTRUCTOR</h1>
                    <Button onClick={create_new}>Create New Project</Button>
                    <Button onClick={load_file}>Load Project From File</Button>
                    {pages ? <Button onClick={load_storage}>Load Project From Backups</Button> : ''}
                    
                    {localLayouts ? <div style={styles.card_holder}>
                        {localLayouts.map((el, indx) => {
                            let layout = JSON.parse(el.layout);
                            let time = el.time;
                                return (
                                    <Card key={generateKey()} style={styles.card}>
                                        <CardContent>
                                            <div>Previously worked layout: {layout.root}</div>
                                            <div>Last change: {time}</div>
                                            
                                        </CardContent>
                                        <CardActions>
                                            <Button style={styles.btn} onClick={() => setLayout(layout)}>Select this project</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })}
                    </div> : ''}
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