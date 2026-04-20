import express from 'express';
import calculatorRoutes from './routes/calculator';

const app = express();

app.use(express.json());


app.use('/', calculatorRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Calculadora API Rest',
    endpoints: ['/sum', '/sub', '/mult', '/div', '/health'],
    usage: 'ejemplo: /sum?a=10&b=20'
  });
});

export default app;
