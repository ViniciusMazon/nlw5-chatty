export default {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: "chatty",
  entities: ["./src/app/entities/**.ts"],
  migrations: ["./src/database/migrations/**.ts"],
  cli: {
    "migrationsDir": "./src/database/migrations"
  }
}
