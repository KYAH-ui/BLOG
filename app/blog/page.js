import { buttonVariants } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";


const dirContent = fs.readdirSync("content", "utf-8")

 const blogs = dirContent.map(file => {
const fileContent = fs.readFileSync(`content/${file}` , "utf-8")
  const {data} = matter(fileContent)
  return data
 })

// const blogs = [
//   {
//     title: "First Blog",
//     description: "This is the first blog description.",
//     slug: "first-blog",
//     date: "2023-10-01",
//     author: "John Doe",
//     image: "https://media.istockphoto.com/id/1467199060/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=OnS8_6FM5ussfSGmjpDD-GofERg2UbItdxShIAA90sQ=", // Replace with actual image URL
//   },
//   {
//     title: "Second Blog",
//     description: "This is the second blog description.",
//     slug: "second-blog",
//     date: "2023-10-02",
//     author: "Jane Doe",
//     image:
//       "https://media.istockphoto.com/id/1221204650/photo/business-can-not-wait.jpg?s=612x612&w=0&k=20&c=1ZJn_BWN-OqIlnjohELZnsUlaXsw9LsKHkUDS8mHfhY=", // Replace with actual image URL
//   },
//   {
//     title: "Third Blog",
//     description: "This is the third blog description.",
//     slug: "third-blog",
//     date: "2023-10-02",
//     author: "Jane Doe",
//     image: "https://www.creativefabrica.com/wp-content/uploads/2020/12/11/Time-to-travel-background-Graphics-7122111-1.jpg", // Replace with actual image URL
//   },
//   // Add more blog objects here
// ];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform dark-border-2 transform hover:scale-105"
          >
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover"  />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {blog.title} </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-2">
                {blog.description} </p>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-4"> 
            <span>By {blog.author}</span>  | <span>{new Date(blog.date).toLocaleDateString()} </span> </div>
             
  
  <Link href ={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
