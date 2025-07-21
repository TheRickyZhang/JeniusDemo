// src/routes/userRoutes.ts
import { Hono } from "hono"
import { db } from "@/server/db/db"
import { users } from "@db/tables"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"
import { selectUserSchema } from "@/shared/schema/userSchema"
import { createErrorResponse, createSuccessResponse } from "@/shared/utils"

const userRoutes = new Hono()

// Fetch one user (public view)
userRoutes.get("/users/:id", async (c) => {
  try {
    const id = c.req.param("id")
    const row = await db
        .select({
          id:    users.id,
          email: users.email,
        })
        .from(users)
        .where(eq(users.id, id))
        .get()

    if (!row) {
      return createErrorResponse(c, "USER_NOT_FOUND", "User not found", 404)
    }

    // Validate against the schema that omits `password`
    const user = selectUserSchema.parse(row)
    return createSuccessResponse(c, user, "User retrieved successfully")
  } catch (err) {
    console.error("Error fetching user:", err)
    return createErrorResponse(c, "FETCH_USER_ERROR", "An error occurred while fetching the user", 500)
  }
})

// Fetch all users (public view)
userRoutes.get("/users", async (c) => {
  try {
    const rows = await db
        .select({
          id:    users.id,
          email: users.email,
        })
        .from(users)

    // Parse each row against the same public schema
    const usersPublic = rows.map(r => selectUserSchema.parse(r))
    return createSuccessResponse(c, usersPublic, "Fetched all users")
  } catch (err) {
    console.error("Error fetching users:", err)
    return createErrorResponse(c, "FETCH_USERS_ERROR", "Failed to fetch users", 500)
  }
})

// Delete a user by ID
userRoutes.delete("/users/:id", async (c) => {
  try {
    const id = c.req.param("id")
    await db.delete(users).where(eq(users.id, id))
    return createSuccessResponse(c, { success: true }, "User deleted successfully")
  } catch (err) {
    console.error("Error deleting user:", err)
    return createErrorResponse(c, "DELETE_USER_ERROR", "Failed to delete user", 400)
  }
})

// Update password
userRoutes.patch("/users/password", async (c) => {
  try {
    const { id, newPassword } = (await c.req.json()) as {
      id: string
      newPassword: string
    }

    if (!id || !newPassword) {
      return createErrorResponse(
          c,
          "MISSING_FIELDS",
          "User ID and newPassword are required",
          422
      )
    }

    // Ensure user exists
    const existing = await db
        .select({ id: users.id })
        .from(users)
        .where(eq(users.id, id))
        .get()

    if (!existing) {
      return createErrorResponse(c, "USER_NOT_FOUND", "User not found", 404)
    }

    // Hash & update
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(newPassword, salt)
    await db.update(users).set({ password: hash }).where(eq(users.id, id))

    return createSuccessResponse(c, { success: true }, "Password updated successfully")
  } catch (err) {
    console.error("Error updating password:", err)
    return createErrorResponse(
        c,
        "UPDATE_PASSWORD_ERROR",
        "Failed to update password",
        500
    )
  }
})

export default userRoutes
