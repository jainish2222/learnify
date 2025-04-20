import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({
  path: ".env",
});

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect:"postgresql",
  dbCredentials: {
    url: "postgresql://test1_owner:npg_d4GSYrw0Iaum@ep-shiny-base-a8q0lfj5-pooler.eastus2.azure.neon.tech/test1?sslmode=require",
  }
} satisfies Config