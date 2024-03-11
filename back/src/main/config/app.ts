import express, { Express } from 'express';
import { setupRoutes } from './routes';
import PgDbConnection from '../../infra/db/pg/config';
import { ClientRepository } from '../../infra/db/pg/repositories/clientRepository';

export const setupApp = (): Express => {
    const app = express();
    const pgDbConnection = new PgDbConnection();
    const clientRepository = new ClientRepository(pgDbConnection);
    app.use(express.json());
    setupRoutes(app, clientRepository);
    return app;
};
