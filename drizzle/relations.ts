// db/relations.ts
import { relations } from "drizzle-orm/relations"
import {
  users,
  portfolios,
  stockInvestments,
  projects,
  projectInvestments,
} from "./tables"

// portfolios → users  (many portfolios belong to one user)
// portfolios → stockInvestments  (one portfolio has many stock positions)
// portfolios → projectInvestments (one portfolio has many project allocations)
export const portfolioRelations = relations(portfolios, ({ one, many }) => ({
  user: one(users, {
    fields: [portfolios.userId],
    references: [users.id],
  }),
  stocks: many(stockInvestments, {
    fields: [portfolios.id],
    references: [stockInvestments.portfolioId],
  }),
  projects: many(projectInvestments, {
    fields: [portfolios.id],
    references: [projectInvestments.portfolioId],
  }),
}))

// stockInvestments → portfolios (many‑to‑one)
export const stockInvestmentRelations = relations(stockInvestments, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [stockInvestments.portfolioId],
    references: [portfolios.id],
  }),
}))

// projectInvestments → portfolios (many‑to‑one)
// projectInvestments → projects   (many‑to‑one)
export const projectInvestmentRelations = relations(projectInvestments, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [projectInvestments.portfolioId],
    references: [portfolios.id],
  }),
  project: one(projects, {
    fields: [projectInvestments.projectId],
    references: [projects.id],
  }),
}))
