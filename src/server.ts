import express from 'express';


const app = express();

app.listen(3000, () => console.log("Server is running in port 3000 !"));

app.get('/javali', async (req, res) => {
   
})