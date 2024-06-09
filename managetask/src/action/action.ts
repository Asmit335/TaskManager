"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
  
export async function createTask(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;
  const completed = formData.get("completed") === "true";  
  const important = formData.get("important") === "true";
  


  await prisma.task.create({
    data: {
        title,
      description,
      date: new Date(date),  
      completed,
      important
    },
  });

   revalidatePath("/task");
  redirect("/task")
 }


 export async function updateTask(formData: FormData,id:number) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const date = formData.get("date") as string;
  const completed = true;
  const important = true;


  await prisma.task.update({
    where:{id},
    data: {
        title,
      description,
      date: new Date(date),  
      completed,
      important
    },
  });

   revalidatePath("/task");
  redirect("/task")
 }

export async function deleteTask(id:number){
  await prisma.task.delete(
    {
      where:{id}
    }
  )
  revalidatePath("/task");
  redirect("/task")
}
