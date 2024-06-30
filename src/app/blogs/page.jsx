import React from "react";
import Link from "next/link";
import blogs from "./blogData";

const BlogPage = () => {
  return (
    <section className="container mx-auto px-4 mb-12">
      <h2 className="text-3xl font-bold text-center py-5">BlogPage</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-5 border space-y-2">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
            <div>
              <Link href={`/blogs/${blog.id}`}>
                <button className="bg-gray-800 text-gray-100 py-1.5 px-4">
                  Vite Details
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogPage;
