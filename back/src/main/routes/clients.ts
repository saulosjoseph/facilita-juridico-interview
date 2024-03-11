import { Router } from 'express';
import { expressRouteAdapter } from '../adapters/express-route-adapter';
import { makeCreateClientController } from '../factories/controllers/createClient.controller';
import { ClientRepository } from '../../infra/db/pg/repositories/clientRepository';

export const clientsRoutes = (router: Router, clientRepository: ClientRepository): void => {
    router.post('/client', expressRouteAdapter(makeCreateClientController(clientRepository)));
    router.get('/client', expressRouteAdapter(makeCreateClientController(clientRepository)));
};
