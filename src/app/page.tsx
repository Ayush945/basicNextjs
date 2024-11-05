import prisma from "@/lib/db";
import { addTask } from "./actions/actions";
export default async function Home() {
  
  const tasks=await prisma.task.findMany();

  return (
    <div className=" bg-zinc-100 flex flex-col items-center p-40">
      <h1 className=" text-xl p-10">All tasks:</h1>
      <ul>{tasks.map(task=>(
        <li key={task.id}>{task.title}</li>
      ))}
      </ul>
      
      <form action={addTask} className="space-x-2 h-4 p-4">
        <input type="text" name="title"
        className="px-3 py-1 rounded"/>
        <button 
        type="submit"
        className="bg-blue-500 px-3 py-1 text-white rounded">
          Add Task
        </button>
      </form>
    </div>
  );
}
