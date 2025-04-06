"use client";
import Typed from "typed.js";
import { Button } from "@/components/ui/button";
import React, { useRef, useEffect } from "react";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "software engineerng",
        "data science ",
        "cloud computing",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span>
            for community <br className="hidden lg:block" /> components using
            <span className="font-semibold  decoration-primary">
              {" "}
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div
            className="mt-6 lg:w-2/3 focus-within:border-primary 
                    focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"
          >
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-13 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300">
              Pricing Plans
            </h2>
            <p className="mt-3 text-xl text-gray-500 dark:text-gray-300">
              Choose Your Plan
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan  */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6  bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 transform hover:scale-105 text-center">
                <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">
                  Basic
                </h3>
                <p className="mt-3 text-center text-gray-500 dark:text-gray-300">
                  $10/month
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>10GB Storage</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Basic Support</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Single User
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Weekly Updates
                  </li>
                </ul>
                <Button className="mx-1 mt-3" variant="outline">
                  Choose Plan{" "}
                </Button>{" "}
              </div>{" "}
            </div>

            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-600">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Standard
                </h3>
                <p className=" text-gray-500  dark:text-gray-300">$25/month</p>
                <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold uppercase px-2 py-1 rounded-bl-lg">
                  Bestseller
                </span>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-600 dark:text-gray-400">
                    24/7 Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Up to 5 Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Daily Updates
                  </li>
                </ul>
                <Button className="mx-1 mt-3" variant="outline">
                  Choose Plan{" "}
                </Button>{" "}
              </div>{" "}
            </div>

            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6  bg-white rounded-lg shadow-lg dark:bg-gray-800 transform  transition duration-500 hover:scale-105 text-center">
                <h3 className="text-xl font-semibold  text-gray-800 dark:text-gray-200">
                  Premium
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $50/month
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-600 dark:text-gray-400">
                    300GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Customer Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited Users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Real-time Updates
                  </li>
                </ul>
                <Button className="mx-1 mt-3" variant="outline">
                  Choose Plan{" "}
                </Button>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-800 transition duration-500">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Exciting Features
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Discover the amazing features we offer to enhance your experience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Feature One
                  </h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">
                    Description of feature one that highlights its benefits and
                    uses.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Feature Two
                  </h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">
                    Description of feature two that highlights its benefits and
                    uses.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Feature Three
                  </h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-300">
                    Description of feature three that highlights its benefits
                    and uses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Check out our most popular blog posts.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src="https://images.stockcake.com/public/e/b/2/eb21202c-b553-46b3-94e3-cd820845a35f_large/blueberries-on-wood-stockcake.jpg"
                  alt="Blog Post Image 1"
                  className="w-full h-48 rounded-t-lg object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Blog Post Title 1
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A brief description of the blog post goes here. It should be
                  engaging and informative.
                </p>
                <Button
                  className="mx-1 mt-3"
                  variant="outline"
                  href="/blog-post-1"
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src="https://cms-assets.themuse.com/media/lead/01212022-1047259374-coding-classes_scanrail.jpg"
                  alt="Blog Post Image 2"
                  className="w-full h-48 rounded-t-lg object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Blog Post Title 2
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  A brief description of the blog post goes here. It should be
                  engaging and informative.
                </p>
                <Button
                  className="mx-1 mt-3"
                  variant="outline"
                  href="/blog-post-2"
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src="https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg="
                  alt="Blog Post Image 3"
                  className="w-full h-48 rounded-t-lg object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                  Blog Post Title 3
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A brief description of the blog post goes here. It should be
                  engaging and informative.
                </p>
                <Button
                  className="mx-1 mt-3"
                  variant="outline"
                  href="/blog-post-3"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
