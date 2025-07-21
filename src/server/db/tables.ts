import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core"
import { generateIdFromEntropySize } from "lucia"

export const users = sqliteTable("user", {
  id: text("id")
      .primaryKey()
      .$defaultFn(() => generateIdFromEntropySize(10)),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
})

export const portfolios = sqliteTable("portfolio", {
  id: text("id")
      .primaryKey()
      .$defaultFn(() => generateIdFromEntropySize(10)),
  userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  type: text("type").notNull(),
})

export const stockInvestments = sqliteTable("stock_investment", {
  id: text("id")
      .primaryKey()
      .$defaultFn(() => generateIdFromEntropySize(10)),
  portfolioId: text("portfolio_id")
      .notNull()
      .references(() => portfolios.id, { onDelete: "cascade" }),
  symbol: text("symbol").notNull(),
  shares: integer("shares").notNull(),
  investedAmount: integer("invested_amount").notNull(),
})

export const projects = sqliteTable("project", {
  id: text("id")
      .primaryKey()
      .$defaultFn(() => generateIdFromEntropySize(10)),
  name: text("name").notNull().unique(),
  description: text("description").notNull().default(""),
})

export const projectInvestments = sqliteTable("project_investment", {
  id: text("id")
      .primaryKey()
      .$defaultFn(() => generateIdFromEntropySize(10)),
  portfolioId: text("portfolio_id")
      .notNull()
      .references(() => portfolios.id, { onDelete: "cascade" }),
  projectId: text("project_id")
      .notNull()
      .references(() => projects.id, { onDelete: "cascade" }),
  amount: integer("amount").notNull(),
})

export const sessions = sqliteTable("session", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateIdFromEntropySize(16)),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: integer("expires_at")
    .notNull(),
})