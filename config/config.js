
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST ?? '127.0.0.1',
    port: process.env.DB_PORT ?? 3306,
    dialect: process.env.DB_DIALECT ?? 'mysql',
  },
}
