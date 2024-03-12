import { Address } from "../../../domain/entities/address";
import { Client } from "../../../domain/entities/client";
import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";
import { GetShortestRouteInterface } from "../../interfaces/useCases/clients/GetShortestRouteInterface";
import { ListClientInterface } from "../../interfaces/useCases/clients/ListClientInterface";

export class GetShortestRouteUseCase implements GetShortestRouteInterface {
  constructor(
    private readonly clientRepository: ClientRepository,
  ) { }

  public async execute(): Promise<ListClientInterface.Response> {
    const allClients = await this.clientRepository.listClient();
    return this.findNearestNeighborRoute(allClients);
  }

  private calculateDistance(address1: Address, address2: Address): number {
    const dx = address1.x - address2.x;
    const dy = address1.y - address2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  private findStartingIndex(clients: Client[]): number {
    return clients.reduce((closestIndex, client, currentIndex) => {
      const distance = this.calculateDistance({ x: 0, y: 0, createdAt: new Date() }, client.address);
      return distance < this.calculateDistance({ x: 0, y: 0, createdAt: new Date() }, clients[closestIndex].address) ? currentIndex : closestIndex;
    }, 0);
  }

  private findNearestNeighbor(clients: Client[], route: Client[], visited: boolean[]): number {
    const lastClient = route[route.length - 1];
    return clients
      .filter((client, index) => !visited[index])
      .map((client, index) => ({ index, distance: this.calculateDistance(lastClient.address, client.address) }))
      .reduce((nearest, current) => (current.distance < nearest.distance ? current : nearest), { index: -1, distance: Infinity })
      .index;
  }

  private buildRoute(clients: Client[], startingIndex: number): Client[] {
    const numClients = clients.length;
    const visited: boolean[] = Array(numClients).fill(false);
    const route: Client[] = [clients[startingIndex]];
    visited[startingIndex] = true;

    while (route.length < numClients) {
      const nearestNeighborIndex = this.findNearestNeighbor(clients, route, visited);
      route.push(clients[nearestNeighborIndex]);
      visited[nearestNeighborIndex] = true;
    }

    return route;
  }

  private findNearestNeighborRoute(clients: Client[]): Client[] {
    const startingIndex = this.findStartingIndex(clients);
    return this.buildRoute(clients, startingIndex);
  }

}
