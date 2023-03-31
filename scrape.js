let store = require('app-store-scraper');
let fs = require('fs');

store.reviews({
    id: '389801252',
    sort: store.sort.RECENT,
    page: 10
}).then((jsonObj) => {
    const jsonData = JSON.stringify(jsonObj);
    fs.writeFile('data.json', jsonData, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File saved');
        }
    });
})
    .catch((err) => {
        console.log(err);
    });
//console.log(jsonData)
    // .then(console.log)
    // .catch(console.log);