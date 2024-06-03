import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  date: Date;
  completed: boolean;
  important: boolean;
}

export default async function Page() {
  const response = await prisma.task.findMany();
  return (
    <div className=" ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-100">
          Tasks List
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {response.map((task) => (
            <div
              key={task.id}
              className="group relative bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {task.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {task.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Due: {new Date(task.date).toLocaleDateString()}
                  </p>
                  <p
                    className={`mt-2 text-sm font-bold ${
                      task.completed ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {task.completed ? "Completed" : "Incomplete"}
                  </p>
                  <p
                    className={`mt-2 text-sm ${
                      task.important ? "text-yellow-500" : "text-gray-700"
                    }`}
                  >
                    {task.important ? "Important" : "Not Important"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="mt-4 flex justify-between items-start">
              <div>
                <Link
                  href="/createtask"
                  className="text-sm font-bold text-gray-900"
                >
                  Add Task
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
