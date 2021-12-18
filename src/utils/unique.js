export const generateKey = () => {
    let key = '';
    const time = new Date().getTime();
    key += time + '' + (Math.random()*10000) * Math.floor(Math.random()*100000);
    return key;
}