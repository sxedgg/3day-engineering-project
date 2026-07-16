"use client";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.msg);
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">任务管理系统-登录</h1>
      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="请输入用户名"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        className="w-full border p-2 mb-4 rounded"
        type="password"
        placeholder="请输入密码"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        登录
      </button>
    </div>
  );
}
