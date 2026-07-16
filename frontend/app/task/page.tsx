"use client";
import { useEffect, useState } from "react";

type TaskItem = {
  id: number;
  title: string;
  content: string;
  status: string;
};

export default function TaskList() {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);

  const loadTasks = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/task/list/1");
    const json = await res.json();
    setTaskList(json.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold mb-6">我的任务清单</h1>
      {taskList.length === 0 ? (
        <p className="text-gray-500">暂无任务</p>
      ) : (
        taskList.map((item) => (
          <div key={item.id} className="border p-4 mb-3 rounded shadow-sm">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 my-2">{item.content}</p>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">{item.status}</span>
          </div>
        ))
      )}
    </div>
  );
}
