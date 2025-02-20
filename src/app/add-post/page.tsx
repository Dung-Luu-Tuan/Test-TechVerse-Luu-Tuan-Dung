"use client";

import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content:
      "Closures are a fundamental concept in JavaScript that allow functions to retain access to their scope even after execution.",
    author: "John Doe",
    date: "2024-02-20",
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    content:
      "React Hooks enable functional components to manage state and side effects in a cleaner, more reusable way.",
    author: "Jane Smith",
    date: "2024-02-19",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    content:
      "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Learn when to use each.",
    author: "Alice Johnson",
    date: "2024-02-18",
  },
  {
    id: 4,
    title: "Optimizing Next.js Applications",
    content:
      "Performance optimization techniques for Next.js apps, including image optimization, lazy loading, and server-side rendering.",
    author: "Bob Brown",
    date: "2024-02-17",
  },
  {
    id: 5,
    title: "Getting Started with TypeScript",
    content:
      "TypeScript is a superset of JavaScript that provides static typing, making it easier to catch errors early in development.",
    author: "Emily White",
    date: "2024-02-16",
  },
];

export default function NewPostPage() {
  const [posts, setPosts] = useState(data);
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
    date: new Date().toISOString().split("T")[0], // Default to today's date
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Post submitted! Check the console.");
    const newPost = {
      id: 99,
      ...post,
    };
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Content</label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={post.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={post.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Post
        </button>
      </form>

      <div className="flex justify-center items-center p-4">
        <ul>
          {posts.map((post, index) => (
            <li key={index} className="text-black">
              <span className="cursor-pointer hover:text-blue-500">
                {post.id}. {post.title}
              </span>
              - {post.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
