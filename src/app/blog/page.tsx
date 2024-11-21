// بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("content", "utf-8");
const blog = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);

  return data;
});

const BlogComponent: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {blog.map((post) => (
        <div
          key={post.id}
          className="max-w-sm rounded overflow-hidden border border-white shadow-lg"
        >
          <Image
            className="w-full h-48 object-cover"
            width={300}
            height={300}
            src={post.imageUrl}
            alt={post.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{post.title}</div>
            <p className=" text-base">{post.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              {post.date.toLocaleString()}
            </span>
          </div>
          <div>
            <Link href={`/blogpost/${post.slug}`}>
              <Button className="ml-6 mb-5 hover:scale-105 transition-all">
                Read more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogComponent;
