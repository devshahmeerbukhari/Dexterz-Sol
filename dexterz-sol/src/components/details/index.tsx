import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectDetails } from "../../StoreDetails/projectsServicesData";
import { Project } from "../../types/project";

function Details() {
  const { slug } = useParams(); // Get dynamic route parameter
  console.log("Slug: ", slug)
  const [project, setProject] = useState<Project | null>(null); // Initialize as null

  useEffect(() => {
    // Find the project with the matching slug
    console.log("PPP: ", ProjectDetails)
    const projectData = ProjectDetails.find((proj) => proj.slug === slug);
    setProject(projectData || null); // Ensure that it's either a project or null
  }, [slug]);

  return (
    <div>
      {project ? (
        <div className="project-details">
          <h1>{project.name}</h1>
          <img src={project.image?.asset?.url} alt={project.name} />
          <p>{project.description}</p>
          <h3>Details:</h3>
          <p>{project.details}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Details;
