// D:\my-app\components\AboutHero.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12">
      {/* Hero Section */}
      <div className="container mx-auto text-center h-96 p-50">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Our Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Welcome to our programming blog where we share insights, tutorials, and projects to help you grow as a developer.
        </p>
      </div>

      {/* Project Showcase Section */}
      <div className="container mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Item */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-500">Project {index + 1}</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Title {index + 1}</h3>
                <p className="text-gray-600 dark:text-gray-300">Brief description of the project goes here.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
