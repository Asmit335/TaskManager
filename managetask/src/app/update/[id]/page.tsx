"use client";
import Update from "@/components/Update";
export default function updatePage({ params }: { params: { id: string } }) {
  const taskId = parseInt(params.id);
  if (isNaN(taskId)) {
    return <div>Invalid post ID</div>;
  }
  return (
    <>
      <Update id={taskId} />
    </>
  );
}
