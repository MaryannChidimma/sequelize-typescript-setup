import dotenv from 'dotenv';
dotenv.config();

const constants = {
  APP_NAME: "sequelize+typescript",
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URI: process.env.DATABASE_URI,
  JWT_SECRET_KEY: process.env.JWT_TOKEN_SECRET,
  JWT_USER_LOGIN_EXPIRATION: "2h",
  BASE_URL:  process.env.BASE_URL,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  
  // Database Configuration
  DB_CONFIGURATION: {
    host:String(process.env.DB_HOST),
    port:String(process.env.DB_PORT),
    username:String(process.env.DB_USERNAME),
    password:String(process.env.DB_PASSWORD),
    database: String(process.env.DB_NAME)
  },

  // Email Configuration
  EMAIL_CONFIGURATION: {
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "",
    EMAIL_HOST: process.env.EMAIL_HOST || "",
    EMAIL_PORT: Number(process.env.EMAIL_PORT) || 587,
  },

  MESSAGES: {
    USER_EXIST: "User already exists",
    USER_CREATED: "User created successfully",
    USER_LOGGED: "User logged in successfully",
    USER_UPDATED: "User updated successfully",
    USER_NOT_EXIST: "User does not exist",
    ALREADY_EXIST: "Resource already exists",
    CREATED: "Resource created successfully",
    FETCHED: "Resource fetched",
    UPDATED: "Resource updated successfully",
    DELETED: "Resource deleted successfully",
    NOT_FOUND: "Not found",
    INVALID_CREDENTIALS: "Invalid credentials",
  },
}

export default constants;
