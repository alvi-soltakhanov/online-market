const express = require('express');
const mongoose = require('mongoose');

const app = express()

const port = 4040;

app.use(express.json());
app.use(require('./routes'));


mongoose.connect("mongodb+srv://sam:into@cluster0.1sks7.mongodb.net/online-market?retryWrites=true&w=majority")
.then(() => {
    console.log(`Mongoose подключен`);
    app.listen(port, () => {
        console.log(`Server has been started on port ${port}`)
    })
}).catch((err) => {
    console.log(err)
});

