import { Express, Router } from 'express';
import { clientsRoutes } from '../routes/clients';
import { ClientRepository } from '../../infra/db/pg/repositories/clientRepository';

export const setupRoutes = (app: Express, clientRepository: ClientRepository): void => {
  const router = Router();
  app.use('/api', router);
  clientsRoutes(router, clientRepository);
};
