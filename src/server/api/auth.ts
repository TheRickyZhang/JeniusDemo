// src/routes/authRoutes.ts
import { db } from "@/server/db/db";
import { createErrorResponse, createSuccessResponse } from "@/shared/utils";
import { users, sessions } from "@db/tables";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { generateIdFromEntropySize } from "lucia";

const { compare, genSalt, hash } = bcrypt;
const authRoutes = new Hono();

// Signup route
authRoutes.post("/auth/signup", async (c) => {
  const { email, password } = await c.req.json();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+\\|[{}\];:'",<>./?]).{8,}$/;

  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return createErrorResponse(c, "INVALID_EMAIL", "Invalid email!", 400);
  }
  if (!password || typeof password !== "string" || !passwordRegex.test(password)) {
    return createErrorResponse(c, "INVALID_PASSWORD", "Password must be ≥ 8 chars, include uppercase, number, symbol", 400);
  }

  const salt = await genSalt(10);
  const passwordHash = await hash(password, salt);
  const userId = generateIdFromEntropySize(16);

  try {
    await db.insert(users).values({
      id: userId,
      email,
      password: passwordHash,
    });
    return createSuccessResponse(c, { userId }, "User successfully created");
  } catch (err) {
    console.error("CREATE_USER_ERROR:", err);
    return createErrorResponse(c, "CREATE_USER_ERROR", "Error creating user", 400);
  }
});

// Login route
authRoutes.post("/auth/login", async (c) => {
  const { email, password } = await c.req.json();

  if (!email || typeof email !== "string") {
    return createErrorResponse(c, "INVALID_EMAIL", "Email is required", 401);
  }
  if (!password || typeof password !== "string") {
    return createErrorResponse(c, "INVALID_PASSWORD", "Password is required", 401);
  }

  const userRow = await db.select().from(users).where(eq(users.email, email)).all();
  if (userRow.length === 0) {
    return createErrorResponse(c, "INVALID_CREDENTIALS", "Invalid email or password", 401);
  }

  const user = userRow[0];
  const valid = await compare(password, user.password);
  if (!valid) {
    return createErrorResponse(c, "INVALID_CREDENTIALS", "Invalid email or password", 401);
  }

  const sessionId = generateIdFromEntropySize(16);
  await createSession(sessionId, user.id);
  c.header(
      "Set-Cookie",
      `sessionId=${sessionId}; Path=/; HttpOnly; Secure; Max-Age=3600; SameSite=Strict`
  );
  return createSuccessResponse(c, { sessionId }, "Successfully logged in");
});

// Logout route
authRoutes.post("/auth/logout", async (c) => {
  const sessionId = c.req.header("Cookie")?.match(/sessionId=([^;]*)/)?.[1];
  if (!sessionId) {
    return createErrorResponse(c, "NO_SESSION", "No active session", 401);
  }
  try {
    await db.delete(sessions).where(eq(sessions.id, sessionId));
    return createSuccessResponse(c, null, "Successfully logged out");
  } catch (err) {
    console.error("LOGOUT_ERROR:", err);
    return createErrorResponse(c, "LOGOUT_ERROR", "Error logging out", 500);
  }
});

// Session validation
authRoutes.get("/auth/session", async (c) => {
  const sessionId = c.req.header("Cookie")?.match(/sessionId=([^;]*)/)?.[1];
  if (!sessionId) {
    return createErrorResponse(c, "NO_SESSION", "No active session", 401);
  }
  try {
    const session = await db.select().from(sessions).where(eq(sessions.id, sessionId)).get();
    if (!session || session.expiresAt < Date.now()) {
      if (session) await db.delete(sessions).where(eq(sessions.id, sessionId));
      return createErrorResponse(c, "SESSION_INVALID", "Session invalid or expired", 401);
    }
    const user = await db
        .select({ id: users.id, email: users.email })
        .from(users)
        .where(eq(users.id, session.userId))
        .get();
    if (!user) {
      return createErrorResponse(c, "USER_NOT_FOUND", "User not found", 401);
    }
    return createSuccessResponse(c, { id: user.id, email: user.email }, "Session valid");
  } catch (err) {
    console.error("SESSION_CHECK_ERROR:", err);
    return createErrorResponse(c, "SESSION_CHECK_ERROR", "Error checking session", 500);
  }
});

async function createSession(sessionID: string, userID: string) {
  try {
    await db.insert(sessions).values({
      id: sessionID,
      userId: userID,
      expiresAt: Date.now() + 3600 * 1000,
    });
  } catch (err) {
    console.error("CREATE_SESSION_ERROR:", err);
  }
}

export default authRoutes;
