/*jshint esversion: 6 */
import {Pool} from 'pg';

export class Database {
    private static config = {
        user: 'admin',
        host: '192.168.50.7',
        database: 'inventario',
        password: 'admin123',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000,
    };

    private static db: Database;

    public pool: Pool;

    private constructor() {
        this.pool = new Pool(Database.config);
    }

    public static getDB() : Database {
        if(Database.db == null) {
            Database.db = new Database();
        }
        
        return Database.db;
    }
}

export * from 'pg';
