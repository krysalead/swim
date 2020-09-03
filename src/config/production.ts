import { Config } from "../interfaces/config";

export const config: Config = {
  mockDb: false,
  remote: {
    enabled: false,
  },
  database: {},
  server: {
    port: +process.env.PORT || 4000,
    name: process.env.NAME || "main",
    cors: process.env.CORS || "http://localhost:3000",
    url: process.env.SERVER_URL || "http://localhost:3000",
  },
  metric: {
    kafka: {
      brokers: process.env.BROKERS || "kafka:9092",
      topic: process.env.TOPIC || "metric-topic",
      clientId: "um-app",
    },
  },
  analytics: {
    id: null,
  },
  logging: {
    services: process.env.LOGGING_SERVICES || "Info",
    controllers: process.env.LOGGING_CONTROLLERS || "Info",
    general: process.env.LOGGING_GENERAL || "Info",
  },
  auth: {
    JWTSecret: process.env.JWT_SECRET,
  },
  data: {
    file: null,
  },
};
