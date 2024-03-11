import express, { Express } from "express";
import dotenv from "dotenv";
import RestClientRoutes from "./restClientRoutes";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
new RestClientRoutes().start(app);
export default app;