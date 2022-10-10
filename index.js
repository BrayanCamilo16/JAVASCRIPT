const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

//archivos estaticos: son quellos que no forman parte de la URL.
//Es mas seguro,  es un nivel de proteccion para las rutas
//la ruta se pone como uno quiera
const path = require('path')
app.use('/image', express.static(path.join(__dirname, 'public')))
//que tipo de motor vamos a utilizaar
app.set('view engine', 'ejs')
//donde van a estra guardadas esas vistas
app.set('views',__dirname+ '/views')

//aqui estan las rutas y van por el metodo get
app.get('/', (req, res) => {
    //res.send('Pagina principal<3')
    console.log(__dirname)
    res.render('index')
})
app.get('/educacion', (req, res) => {
    res.render('educacion'),{
        titulo: "Esto es educacion",
        descripcion: "Aqui esta la formacion academica"
    }
    })

//esta nuestra funcion, si el estado es 404 o no encotrado, devuelva el arrchivo 404.html
app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname+'/public/404.html')
})


app.listen(port, () => {
    console.log(`Acceda al servidor dando click aqui http://localhost:${port}`)
})