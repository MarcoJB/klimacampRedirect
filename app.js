const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let date = new Date();
    date.setDate(date.getDate() + (4 + 7 - date.getDay()) % 7);
    const day = date.getDate()
    const month = date.getMonth() + 1

    res.redirect(
        `https://pad.klimacamp-ka.de/p/TO_${day>9?day:"0"+day}.${month>9?month:"0"+month}.${date.getFullYear()}`
    );
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
