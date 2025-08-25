import styles from "./periodBox.module.css";

export default function PeriodBox({ date }: { date: string }) {
  return <div className={styles.period_box}>{date}</div>;
}
