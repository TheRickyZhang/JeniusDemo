import {z} from "zod";

export const projectSchema = z.object({
  id:          z.string().min(1, "Project ID is required."),
  name:        z.string().min(1, "Project name is required."),
  description: z.string().optional(),
})
export type Project = z.infer<typeof projectSchema>

export const insertProjectSchema = projectSchema
  .omit({ id: true })
export type InsertProject = z.infer<typeof insertProjectSchema>

export const updateProjectSchema = projectSchema
  .pick({ id: true, name: true, description: true })
  .partial()
export type UpdateProject = z.infer<typeof updateProjectSchema>

export const deleteProjectSchema = z.object({
  id: z.string().min(1, "Project ID is required."),
})
export type DeleteProject = z.infer<typeof deleteProjectSchema>