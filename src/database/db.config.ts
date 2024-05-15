import { DataSource } from "typeorm";
import path from "path";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "users-db",
    synchronize: true,
    // logging: true,
    entities: [path.join(__dirname, "..", "/entities/../**/**.entity{.ts,.js}")]
});


export default AppDataSource;