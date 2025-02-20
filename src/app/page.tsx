"use client";

import { useRouter } from "next/navigation";
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

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, _] = useState(data);
  const router = useRouter();

  return (
    <div className="flex justify-center items-center p-4">
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <span
              className="cursor-pointer hover:text-blue-500"
              onClick={() => router.push(`/posts/${post.id}`)}
            >
              {post.title}
            </span>
            - {post.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
