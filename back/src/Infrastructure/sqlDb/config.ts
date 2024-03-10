import { Pool, PoolClient } from "pg";

export default class SqlDb {
  private pool: Pool;
  private poolClient?: PoolClient;

  public constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'facilitajuridico',
      password: 'postgres',
      port: 5432,
    })
  }

  private async connect(): Promise<PoolClient> {
    if(this.poolClient) {
      return this.poolClient
    }
    this.poolClient = await this.pool.connect();
    return this.poolClient;
  }

  public async query<T>(query: string, values?: Array<any>): Promise<T> {
    const client = await this.connect();
    const res = await client.query(query, values);
    return res.rows as T;
  }
}