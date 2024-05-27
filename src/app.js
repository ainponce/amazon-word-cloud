import express from 'express';
import productRouter from './routes/productRoutes.js';

const app = express();
const port = 8080;

//Configure view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', productRouter);

//Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
