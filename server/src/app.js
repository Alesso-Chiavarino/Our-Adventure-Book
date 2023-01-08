import express from 'express'
import apiRoutes from './routes/app.routes.js'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload',
}))
app.use(cors());
app.use('/api', apiRoutes);
app.use(express.static(resolve(__dirname, '../../client/build')));

export default app;