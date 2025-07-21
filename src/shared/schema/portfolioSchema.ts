import {z} from "zod"

export const portfolioSchema = z.object({
    id: z.string().min(1, "Portfolio ID is required."),
    userId: z.string().min(1, "User ID is required."),
    name: z.string().min(1, "Portfolio name is required."),
    type: z.enum(
        ["stocks", "projects"],
        {
            invalid_type_error: "Type must be 'stocks' or 'projects'.",
            required_error: "Portfolio type is required."
        }
    ),
})
export type Portfolio = z.infer<typeof portfolioSchema>

export const insertPortfolioSchema = portfolioSchema
    .omit({id: true})
export type InsertPortfolio = z.infer<typeof insertPortfolioSchema>

export const updatePortfolioSchema = portfolioSchema
    .pick({id: true, name: true, type: true})
    .partial()
export type UpdatePortfolio = z.infer<typeof updatePortfolioSchema>

export const deletePortfolioSchema = z.object({
    id: z.string().min(1, "Portfolio ID is required."),
})
export type DeletePortfolio = z.infer<typeof deletePortfolioSchema>