"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;
  const completed = false;
  const important = false;


  await prisma.task.create({
    data: {
        title,
      description,
      date: new Date(date),  
      completed,
      important
    },
  });

  revalidatePath("/Alltask");
  redirect("/alltask")
}
