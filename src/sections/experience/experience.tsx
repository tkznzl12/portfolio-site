import DotList from "@/components/dotList/dotList";
import styles from "./experience.module.css";
import { WorkInfo } from "@/data/arrayData";
import { ExperienceTypes } from "@/types";

export default function Experience() {
  return (
    <div className={styles.experience_list}>
      {WorkInfo.map((work: ExperienceTypes, index: number) => (
        <DotList
          number={WorkInfo.length - index}
          workData={work}
          key={`work${index}`}
        />
      ))}
    </div>
  );
}
