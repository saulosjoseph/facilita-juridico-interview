import express, { Express } from "express";
import dotenv from "dotenv";
import ClientController from "../Presentation/restClientRoutes";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
ClientController.start(app);
export default app;