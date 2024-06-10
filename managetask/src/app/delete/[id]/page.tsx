"use client";

import { deleteTask } from "@/action/action";
import Link from "next/link";
import toast from "react-hot-toast";

export default function page({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);

  const handleDelete = async () => {
    await deleteTask(postId);
    toast.success("Deleted Successfully.");
  };
  if (isNaN(postId)) {
    return <div>Invalid post ID</div>;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
          <h1 className="text-xl font-bold mb-4 text-center text-black">
            Are you sure you want to delete this post?
          </h1>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Yes, delete
            </button>
            <Link
              href="/task"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              No, cancel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
