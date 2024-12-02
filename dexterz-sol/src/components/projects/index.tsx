import React, { useEffect, useState } from "react";
import client from "../../client";
import Card from "../sanityContent/Card";
import { ProjectDetails } from "../../StoreDetails/projectsServicesData";
import { ServicesDetails } from "../../StoreDetails/projectsServicesData";
import { Project } from "../../types/project";


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

  console.log("Project Details: ", ProjectDetails)
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 lg:mx-20 m-28">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
