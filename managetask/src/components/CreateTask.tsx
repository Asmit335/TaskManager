"use client";
import { createTask } from "@/action/action";
import React from "react";
import { toast } from "react-toastify";

export default function CreateTask() {
  const handletoast = () => {
    toast.success("Task created Successfull.");
  };

  return (
    <>
      <form
        action={createTask}
        className="space-y-6 bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto my-8"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            className="mt-2 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            placeholder="Enter a Title"
          ></input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            className="mt-2 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write your description here"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-lg font-medium text-gray-700"
          >
            Date
          </label>
          <input
            id="date"
            name="date"
            className="mt-2 block w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            type="date"
          ></input>
        </div>
        <div className="mb-4 flex items-center">
          <input
            id="completed"
            name="completed"
            type="checkbox"
            className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          ></input>
          <label
            htmlFor="completed"
            className="ml-2 block text-lg font-medium text-gray-700"
          >
            Completed
          </label>
        </div>
        <div className="mb-4 flex items-center">
          <input
            id="important"
            name="important"
            type="checkbox"
            className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          ></input>
          <label
            htmlFor="important"
            className="ml-2 block text-lg font-medium text-gray-700"
          >
            Important
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handletoast}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 border border-transparent rounded-lg font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </>
  );
}
