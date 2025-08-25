import DotList from "@/components/dotList/dotList";
import styles from "./experience.module.css";

export default function Experience() {
  return (
    <div className={styles.experience_list}>
      <DotList />
      <DotList />
    </div>
  );
}
