import express from 'express';
import { routes } from './routes/mamifero.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
   res.status(200).send({ message: "Bem vindo a API Javali!"});
});

app.listen(PORT, () => console.log("Server is running in port 3000 !"));

