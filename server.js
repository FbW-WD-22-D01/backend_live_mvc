import express from 'express'

// Controller werden importiert und aus den Routen heraus aufgerufen
import { showAllProducts } from './controller/waren_controller.js'


const PORT = 5000
const app = express()


app.get('/',(req, res) =>  showAllProducts(req, res)) //controller aufrufen)


app.listen(PORT, () => console.log(`Server is running ${PORT}`))



