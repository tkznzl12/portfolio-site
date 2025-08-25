import styles from "./projectItem.module.css";
import PeriodBox from "../periodBox/periodBox";
import { ProjectDataTypes } from "@/types";

export default function ProjectItem({
  projectData,
  index,
}: {
  projectData: ProjectDataTypes;
  index: number;
}) {
  return (
    <div className={styles.project_component} key={`project${index}`}>
      <div className={styles.top}>
        <p className={styles.project_name}>{projectData.projectName}</p>
        <PeriodBox date={projectData.period} />
      </div>
      <div className={styles.use_skills}>
        {projectData.skill.map((skill: string, index: number) => (
          <p key={index} className={styles.skill_box}>
            {skill}
          </p>
        ))}
      </div>
      <div className={styles.content}>
        <p className={styles.explanation}>{projectData.explanation}</p>
        <p className={styles.part}>{projectData.part}</p>
      </div>
    </div>
  );
}
