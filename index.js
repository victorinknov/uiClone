const express = require('express'),
    app = express(),
    port = 3000,
    path = require('path')

app.use('/assets', express.static(path.join(__dirname + '/assets')))
app.use('/assets', express.static(path.join(__dirname + '/distros/windows10/assets')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/windows10', (req, res) => {
    res.sendFile(path.join(__dirname + '/distros/windows10/index.html'))
})

app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}/`)
})