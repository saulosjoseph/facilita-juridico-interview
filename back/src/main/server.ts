import { setupApp } from "./config/app";
import { env } from "./config/env";

env();
const port = process.env.PORT || 3000;
const app = setupApp();
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
