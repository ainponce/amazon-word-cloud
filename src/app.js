import express from 'express';
import productRouter from './routes/productRoutes.js';

const app = express();
const port = 8080;

//vistas
app.set('view engine', 'ejs');
app.set('views', './src/views');

//middlewares
app.use('/scripts', express.static('node_modules/wordcloud'));
app.use('/', productRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
