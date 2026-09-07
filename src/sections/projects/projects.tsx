import ProjectItem from "@/components/projectItem/projectItem";
import styles from "./projects.module.css";
import { ProjectData } from "@/data/arrayData";
import { ProjectDataTypes } from "@/types";
export default function Projects() {
  return (
    <div className={styles.project_list}>
      {ProjectData.map((project: ProjectDataTypes, index: number) => (
        <ProjectItem projectData={project} index={index} key={index} />
      ))}
    </div>
  );
}
