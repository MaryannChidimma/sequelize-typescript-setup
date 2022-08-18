import http = require('http')
import express, { Express, Request, Response } from 'express';
import path from 'path';
import helmet from "helmet";
import { ErrorMiddleware } from './middleware/errorHandler';
import constants from './config/constants';
import apiRoutes from './routes/index'
import 'express-async-errors'
import './models/index'

const app: Express = express();
const port = constants.PORT ;
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", apiRoutes());

app.use("/", (req: Request, res: Response) => {
  res.status(200).sendFile(path.resolve("public", "index.html"));
});

app.use(ErrorMiddleware);


const server = http.createServer(app);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.on("error", (error: any) => {
  console.log(`Error occured on the server ${error}`);
});



