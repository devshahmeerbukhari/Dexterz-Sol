import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

// Create a builder instance for the Sanity client
const builder = imageUrlBuilder(client);

// Define the type for props
type ProjectCardProps = {
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

// Define the urlFor function to return a proper URL with transformations
const urlFor = (source: any) => builder.image(source).width(800).url();

const Card: React.FC<ProjectCardProps> = ({ name, description, image, slug }) => {
  // {console.log("In Card: ", slug)}
  return (
    <div className="border rounded-lg p-4">
      {/* Project Image */}
      {image?.asset ? (
        <img
          src={urlFor(image.asset)} // Passing the asset object
          alt={name}
          className="mt-4 w-full h-64 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      ) : (
        <p className="mt-4 text-red-500">Image not available</p>
      )}

      {/* Project Name */}
      <h1 className="mt-5 text-xl font-bold">{name}</h1>

      {/* Project Description */}
      <p className="mt-2 text-gray-700">{description}</p>

      {/* Project Link (slug) */}
      {slug && (
        <div className="mt-10">
          <a
            href={`/details/${slug}`}
            className="text-blue-500 hover:text-blue-700"
          >
            View Details
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;
