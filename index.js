const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const PORT = 3000;


//Configuracion del motor de plantillas
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
}))
 
app.get('/', (req, res) => {
    res.render('home', {
        title: '::: HOME :::',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: '::: Acerca de Nosotros :::',
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: '::: Contacto :::',
    }
        )
}) 



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})