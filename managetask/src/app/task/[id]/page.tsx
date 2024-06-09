import prisma from "@/lib/db";

export default async function Page({ params }: { params: { id: string } }) {
  const taskId = parseInt(params.id);

  console.log("id:", taskId);

  const result = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  return (
    <div>
      <h1>hello</h1>
      <h1>{result?.title}</h1>
      <h1>{result?.id}</h1>
      <p>{result?.description}</p>
    </div>
  );
}
