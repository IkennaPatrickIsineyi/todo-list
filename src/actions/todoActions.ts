"use server";
import { asc, eq, ilike, not } from "drizzle-orm";
import { revalidatePath, revalidateTag } from "next/cache";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

const generateId = () => crypto.randomUUID();

export const getData = async (page: number) => {
  const cursor = db.select().from(todo);
  const total = (await cursor).length;

  const data = await cursor
    .orderBy(asc(todo.createdAt))
    .limit(10)
    .offset(10 * (page - 1));

  return { data, total };
};

export const getSingleTodo = async (id: string) => {
  const data = await db.select().from(todo).where(ilike(todo.id, id));

  return data[0];
};

export const addTodo = async (text: string, done: boolean) => {
  try {
    await db.insert(todo).values({
      id: generateId(),
      text: text,
      done,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await db.delete(todo).where(eq(todo.id, id));

    revalidatePath("/");
    revalidateTag("");
  } catch (error) {
    console.log("error", error);
  }
};

export const editTodo = async (id: string, text: string, done: boolean) => {
  try {
    await db
      .update(todo)
      .set({
        text: text,
        done,
      })
      .where(eq(todo.id, id));

    revalidatePath("/");
  } catch (error) {
    console.log("error", error);
  }
};
