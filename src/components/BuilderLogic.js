export class BuilderLogic {
    constructor() {

    }

    handleSave = (fileManager, json, setSaveLink, setSaving) => {
        const content = fileManager.stringifyJson(json());
        const file = new Blob([content], { type: 'application/json' });
        const link = URL.createObjectURL(file);

        // set localStorage
        let time = new Date().toLocaleString();
        let pages = fileManager.getLocalStorage();
        if (!pages) pages = [];

        let flag = false;
        for (let i = 0; i < pages.length; i++) {
            let layout = fileManager.parseJson(pages[i].layout);
            let root = fileManager.parseJson(content).root;
            if (layout.root === root) {
                pages[i].layout = content;
                pages[i].time = time;
                flag = true;
            }
        }
        flag ? fileManager.setLocalStorage(pages) : fileManager.setLocalStorage([...pages, {layout: content, time: time}]);
    
        setSaveLink(link);
        setSaving(true);
    }

    handleLoad = (event, setFile) => {
        const file = event.target.files[0];
        setFile(file);
    }
}