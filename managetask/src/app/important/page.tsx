import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default async function Task() {
  const response = await prisma.task.findMany({
    where: {
      important: true,
    },
  });
  return (
    <div className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">
          Important Tasks ({response.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {response.map((task) => (
            <div
              key={task.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {task.title}
                </h3>
                <p className="text-gray-600 mb-2">{task.description}</p>
                <p className="text-gray-600 mb-2">
                  Date: {new Date(task.date).toLocaleDateString()}
                </p>
                <div className="mt-5 cursor-pointer ">
                  <p
                    className={`text-sm font-semibold hover:bg-green-400 hover:text-black  rounded-2xl border p-2 border-gray-500 text-white inline ${
                      task.completed ? "bg-green-500" : "text-red-500"
                    }`}
                  >
                    {task.completed ? "Completed" : "Incomplete"}
                  </p>
                  <p
                    className={`text-sm hover:bg-yellow-400 hover:text-black  font-semibold ml-3  rounded-2xl border p-2 border-gray-500 text-white inline ${
                      task.completed ? "bg-yellow-500" : "bg-gray-600"
                    }`}
                  >
                    {task.important ? "Important" : "Not Important"}
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center px-4 py-2 bg-gray-100 text-2xl">
                <Link
                  href={`/update/${task.id}`}
                  className="text-gray-600 hover:text-green-500 focus:outline-none"
                >
                  <FaRegEdit />
                </Link>
                <Link
                  href={`/delete/${task.id}`}
                  className="text-gray-600 hover:text-red-500 focus:outline-none ml-2"
                >
                  <MdDelete />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
