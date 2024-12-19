"use client";

import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: number;
  created_at: string;
  slug: string;
  title: string;
  thumbnail: string;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      {blogs.length > 0 ? (
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li key={blog.id} className="border-b pb-4">
              <div className="flex items-center space-x-4">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <Link
                  href={`/blog/${blog.slug}`}
                  className="hover:text-blue-500"
                >
                  <h3 className="text-xl">{blog.title}</h3>
                  <p className="text-neutral-500 text-sm">
                    Published on{" "}
                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs available.</p>
      )}
    </>
  );
}
