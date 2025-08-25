import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header_container}>
      <ul className={styles.header_list}>
        <li>About Me</li>
        {/* <li>Skills</li> */}
        <li>Experience</li>
        <li>Projects</li>
        {/* <li>Portfolio</li> */}
        <li>Contact</li>
      </ul>
    </header>
  );
}
