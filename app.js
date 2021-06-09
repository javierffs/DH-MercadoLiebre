const express = require('express');
const path = require('path');
const { send } = require('process');
const app = express();
const pathPublic = (path.resolve(__dirname, './public'));
app.use(express.static(pathPublic));
/*app.listen(3000,() => {

    console.log("Servidor escuchando en puerto 3000")
}
); */

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})
app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
}
);

