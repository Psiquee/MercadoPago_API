import express from "express";
import morgan from "morgan";
import paymentRoutes from './routes/payment.routes.js'
import { PORT } from "./config.js";
import path from 'path';



const app = express()

app.use(morgan('dev'))

app.use(paymentRoutes);

//path llama a node al inicio
app.use(express.static(path.resolve('src/public')))

app.listen(PORT)
console.log('Server on port', PORT)