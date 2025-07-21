import { z } from "zod"

export const stockInvestmentSchema = z.object({
    id:             z.string().min(1, "Investment ID is required."),
    portfolioId:    z.string().min(1, "Portfolio ID is required."),
    symbol:         z.string().min(1, "Symbol is required."),
    shares:         z.number().int().min(0, "Shares must be ≥ 0."),
    investedAmount: z.number().int().min(0, "Invested amount must be ≥ 0."),
})
export type StockInvestment = z.infer<typeof stockInvestmentSchema>

export const insertStockInvestmentSchema = stockInvestmentSchema
    .omit({ id: true })
export type InsertStockInvestment = z.infer<typeof insertStockInvestmentSchema>

export const updateStockInvestmentSchema = stockInvestmentSchema
    .pick({ id: true, shares: true, investedAmount: true })
    .partial()
export type UpdateStockInvestment = z.infer<typeof updateStockInvestmentSchema>

export const deleteStockInvestmentSchema = z.object({
    id: z.string().min(1, "Investment ID is required."),
})
export type DeleteStockInvestment = z.infer<typeof deleteStockInvestmentSchema>
