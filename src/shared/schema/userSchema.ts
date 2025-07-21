import { z } from "zod";

/** full DB row */
export const userSchema = z.object({
    id:       z.string().min(1, "User ID is required."),
    email:    z.string().email("Invalid email address."),
    password: z.string().min(1, "Password is required."),
});
export type User = z.infer<typeof userSchema>;

/** for inserts */
export const insertUserSchema = userSchema
    .omit({ id: true })
    .extend({
        password: z
            .string()
            .min(6, "Password must be at least 6 characters long."),
    });
export type InsertUser = z.infer<typeof insertUserSchema>;

/**
 * THE public / select schema:
 * exactly the fields you return in GET /users
 */
export const selectUserSchema = userSchema
    .omit({ password: true });
export type SelectUser = z.infer<typeof selectUserSchema>;

/** for updates (if you ever allow changing email) */
export const updateUserSchema = userSchema
    .pick({ id: true, email: true })
    .partial();
export type UpdateUser = z.infer<typeof updateUserSchema>;

/** for deletes */
export const deleteUserSchema = z.object({
    id: z.string().min(1, "User ID is required."),
});
export type DeleteUser = z.infer<typeof deleteUserSchema>;
