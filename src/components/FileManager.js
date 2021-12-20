
export class FileManager {
    constructor(){

    }

    // returns an array if local storage has pages or false if not
    getLocalStorage = () => {
        let pages = this.parseJson(localStorage.getItem('pages'))
        return pages?.length ? pages : [];
    }
    
    // stringify and set full copy of pages
    setLocalStorage = (pages) => {
        if (!Array.isArray(pages)) return;
        localStorage.setItem('pages', this.stringifyJson([...pages]))
    }

    parseJson = (obj) => {
        return JSON.parse(obj);
    }
    stringifyJson = (obj) => {
        return JSON.stringify(obj);
    }

    // loads file
    handleLoad = (e, setLayout) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setLayout(this.parseJson(e.target.result));
        };
    }
}