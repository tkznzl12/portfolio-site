import { caseStudiesData } from "@/data/caseStudies";
import styles from "./workComponent.module.scss";

export default function WorkComponent() {
  const sampleData = caseStudiesData[0];
  return (
    <div className={styles.work_container}>
      <div className={styles.sidebar}>
        <p>{sampleData.title}</p>
      </div>
      <div className={styles.work_content}>
        <p className={styles.work_title}>상황</p>
        <p className={styles.work_data}>{sampleData.situation}</p>
        <p className={styles.work_title}>과제</p>
        <p className={styles.work_data}>{sampleData.task}</p>
        <p className={styles.work_title}>고민 및 아이디어</p>
        <div>
          {sampleData.thoughtProcess.map((process, index) => (
            <p className={styles.work_data} key={index}>
              • {process}
            </p>
          ))}
        </div>
        <p className={styles.work_title}>해결 방법</p>
        <div className={styles.work_data}>
          {sampleData.action.map((action, index) => (
            <p className={styles.work_data} key={index}>
              • {action}
            </p>
          ))}
        </div>
        <p className={styles.work_title}>결과</p>
        <div className={styles.media}>
          <video controls>
            <source type="video/mp4" src={sampleData.media} />
          </video>
        </div>
        <div>
          <p className={styles.work_data}>{sampleData.result}</p>
        </div>
      </div>
    </div>
  );
}
