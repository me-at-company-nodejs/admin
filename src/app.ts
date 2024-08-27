import express, { Application, Request, Response} from 'express';
import adminRoute from './routes/admin.route';

const app: Application = express();
const port: number = 3003;

// Link orchestratorRoute with app
app.use('/admin', adminRoute);

app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});
