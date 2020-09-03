import { Config } from "../interfaces/config";

export const config: Config = {
  mockDb: false,
  remote: {
    enabled: false,
  },
  database: {
    mongo: {
      url: process.env.DATABASE_URL || "mongodb://localhost:27017/dbTest",
      debug: false,
    },
  },
  server: {
    port: +process.env.PORT || 4000,
    name: "main",
    cors: process.env.CORS || "http://localhost:8888",
    url: process.env.SERVER_URL || "http://localhost:8888",
  },
  analytics: {
    id: null,
  },
  metric: {
    token: process.env.METRIC_TOKEN,
    url: "https://eu-central-1-1.aws.cloud2.influxdata.com",
    bucket: process.env.METRIC_BUCKET || "functional_test",
  },
  logging: {
    services: process.env.LOGGING_SERVICES || "Info",
    controllers: process.env.LOGGING_CONTROLLERS || "Info",
    general: process.env.LOGGING_GENERAL || "Info",
  },
  auth: {
    JWTSecret: "test secret key",
  },
  data: {
    file: null,
  },
};
