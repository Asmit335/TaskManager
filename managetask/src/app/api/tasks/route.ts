import { auth } from "@clerk/nextjs/server"; 
import { NextRequest, NextResponse } from "next/server";

type Task = {
  id: number;
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  isImportant: boolean;
  userId: string;
};

let tasks: Task[] = [];  

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const task: Task = {
      id: tasks.length + 1,
      title,
      description,
      date,
      isCompleted: completed || false,
      isImportant: important || false,
      userId,
    };

    tasks.push(task);

    return NextResponse.json(task);
  } catch (error) {
    console.log("ERROR CREATING TASK: ", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const userTasks = tasks.filter(task => task.userId === userId);

    return NextResponse.json(userTasks);
  } catch (error) {
    console.log("ERROR GETTING TASKS: ", error);
    return NextResponse.json({ error: "Error getting tasks", status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { userId } = auth();
    const { isCompleted, id } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const taskIndex = tasks.findIndex(task => task.id === id && task.userId === userId);

    if (taskIndex === -1) {
      return NextResponse.json({ error: "Task not found", status: 404 });
    }

    tasks[taskIndex].isCompleted = isCompleted;

    return NextResponse.json(tasks[taskIndex]);
  } catch (error) {
    console.log("ERROR UPDATING TASK: ", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}
