import React, { useEffect, useState } from "react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

// Create a builder instance for the Sanity client
const builder = imageUrlBuilder(client);

// Define types for the project and image objects
type Project = {
  name: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  slug: string;
};

function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "projectSchema"]`);
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Define the urlFor function to return a proper URL with transformations
  const urlFor = (source: any) => builder.image(source).width(800).url(); // Specify width here

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 lg:mx-20 m-28">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4">
            {/* Project Image */}
            {project.image?.asset ? (
              <img
                src={urlFor(project.image.asset)} // Passing the asset object
                alt={project.name}
                 className="mt-4 w-full h-64 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            ) : (
              <p className="mt-4 text-red-500">Image not available</p>
            )}

            {/* Project Name */}
            <h1 className="mt-5 text-xl font-bold">{project.name}</h1>

            {/* Project Description */}
            <p className="mt-2 text-gray-700">{project.description}</p>

            {/* Project Link (slug) */}
            {project.slug && (
              <div className="mt-10">
                <a
                  href={`/project/${project.slug}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Details
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
