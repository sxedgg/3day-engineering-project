"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type UserInfo = {
  username:string;
  create_time:string;
  task_total:number;
}

export default function UserPage() {
  const [user, setUser] = useState<UserInfo|null>(null);
  const uid = localStorage.getItem("uid") || "1";

  const getUserInfo = async () => {
    const res = await fetch(`http://127.0.0.1:5000/api/user/info/${uid}`);
    const data = await res.json();
    if(data.code === 200) setUser(data);
  }

  useEffect(()=>{
    getUserInfo()
  },[])

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold">个人中心</h2>
        <div>
          <Link href="/login" className="text-blue-500 mr-3">登录</Link>
          <Link href="/task" className="text-blue-500">任务</Link>
        </div>
      </div>
      {user ? (
        <div className="space-y-3">
          <p>用户名：{user.username}</p>
          <p>注册时间：{user.create_time}</p>
          <p>总任务数：{user.task_total}</p>
        </div>
      ) : <p>加载中...</p>}
    </div>
  )
}
