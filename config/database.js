module.exports = (({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      user: env("DATABASE_USERNAME"),
      database: env("DATABASE_NAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: { rejectUnauthorized: false },
    },
  },
}));
