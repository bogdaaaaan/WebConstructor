import { styles } from './style/MainMenu';
import { Card, Button, CardContent, CardActions } from "@material-ui/core";
import DemoBuilder from './DemoBuilder';
import BuilderGrid from './layout/BuilderGrid';
import { generateKey } from '../utils/unique.js';
import { useState, useRef, useEffect } from "react";
import Delete from '@material-ui/icons/Delete';

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

    const delete_from_storage = (root) => {
        let copy_pages = [];
        for (let i = 0; i < pages.length; i++) {
            if (JSON.parse(pages[i].layout).root !== root) {
                copy_pages.push(pages[i]);
            }
        }

        localStorage.setItem('pages', JSON.stringify([...copy_pages]));
        setPages([...copy_pages]);
        setLocalLayouts([...copy_pages]);
        
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
                    {pages.length ? <Button onClick={load_storage}>Load Project From Backups</Button> : ''}
                    
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
                                        <CardActions style={styles.actions}>
                                            <Button style={styles.btn} onClick={() => setLayout(layout)}>Select </Button>
                                            <Button style={styles.btn} onClick={() => delete_from_storage(layout.root)}><Delete/></Button>
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