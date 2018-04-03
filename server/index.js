const express = require('express');

const port = 4000;

const app = express();

//Serving for production

app.use(express.static(`${__dirname}`));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, () => {
    console.log(`Portfolio: ${port}`)
});