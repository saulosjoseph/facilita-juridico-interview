import { Pool, PoolClient } from "pg";

export default class Db {
  private pool: Pool;

  public constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'api',
      password: 'postgres',
      port: 5432,
    })
  }

  private async connect(): Promise<PoolClient> {
    return this.pool.connect();
  }

  public async query<T>(query: string): Promise<T> {
    const client = await this.connect();
    const res = await client.query(query);
    return res.rows as T;
  }
}