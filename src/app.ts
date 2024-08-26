import express, { Application, Request, Response} from 'express';

const app: Application = express();
const port: number = 3003;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello adminms');
});

app.listen(port, () => {
    console.log(`Connectted successfully on port ${port}`);
});
