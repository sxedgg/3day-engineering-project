"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type TaskItem = {
  id: number;
  title: string;
  content: string;
  status: string;
};

export default function TaskList() {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const uid = localStorage.getItem("uid") || "1";

  const loadTasks = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/task/list/${uid}`);
    const json = await res.json();
    setTaskList(json.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">我的任务清单</h1>
        <div>
          <Link href="/login" className="text-blue-500 mr-4">登录页</Link>
          <Link href="/user" className="text-blue-500">个人中心</Link>
        </div>
      </div>
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
