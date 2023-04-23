import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import index from './routes/index/index.routes';

const app = express()

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/', index)

export default app;
