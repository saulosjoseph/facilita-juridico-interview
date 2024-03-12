import { Router } from 'express';
import { expressRouteAdapter } from '../adapters/expressRouteAdapter';
import { makeCreateClientController } from '../factories/controllers/createClient.controller';
import { ClientRepository } from '../../infra/db/pg/repositories/clientRepository';
import { makeListClientController } from '../factories/controllers/listClient.controller';
import { makeFilterClientController } from '../factories/controllers/filterClient.controller';
import { makeGetShortestRouteController } from '../factories/controllers/getShortestRoute.controller';

export const clientsRoutes = (router: Router, clientRepository: ClientRepository): void => {
    router.post('/client', expressRouteAdapter(makeCreateClientController(clientRepository)));
    router.get('/client', expressRouteAdapter(makeListClientController(clientRepository)));
    router.get('/client/filter', expressRouteAdapter(makeFilterClientController(clientRepository)));
    router.get('/client/route', expressRouteAdapter(makeGetShortestRouteController(clientRepository)));
};
