import { z } from "zod"

export const projectInvestmentSchema = z.object({
  id:          z.string().min(1, "Investment ID is required."),
  portfolioId: z.string().min(1, "Portfolio ID is required."),
  projectId:   z.string().min(1, "Project ID is required."),
  amount:      z.number().int().min(0, "Amount must be ≥ 0."),
})
export type ProjectInvestment = z.infer<typeof projectInvestmentSchema>

export const insertProjectInvestmentSchema = projectInvestmentSchema
  .omit({ id: true })
export type InsertProjectInvestment = z.infer<typeof insertProjectInvestmentSchema>

export const updateProjectInvestmentSchema = projectInvestmentSchema
  .pick({ id: true, amount: true })
  .partial()
export type UpdateProjectInvestment = z.infer<typeof updateProjectInvestmentSchema>

export const deleteProjectInvestmentSchema = z.object({
  id: z.string().min(1, "Investment ID is required."),
})
export type DeleteProjectInvestment = z.infer<typeof deleteProjectInvestmentSchema>