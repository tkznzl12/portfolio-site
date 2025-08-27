import Image from "next/image";
import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div className={styles.contact_component}>
      <div className={styles.contact_item}>
        <a className={styles.ring} href="tel:01029948392">
          <Image width={30} height={30} src="/icon/phone.png" alt="phone" />
        </a>
        <p>010-2994-8392</p>
      </div>
      <div className={styles.contact_item}>
        <a className={styles.ring} href="mailto:tkznzl12@naver.com">
          <Image width={30} height={30} src="/icon/email.png" alt="email" />
        </a>
        <p> tkznzl12@naver.com</p>
      </div>
      <div className={styles.contact_item}>
        <a
          className={styles.ring}
          href="https://github.com/tkznzl12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={30} height={30} src="/icon/github.png" alt="github" />
        </a>
        <p>https://github.com/tkznzl12</p>
      </div>
      <div className={styles.contact_item}>
        <a
          className={styles.ring}
          href="https://gomdol97.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={30} height={30} src="/icon/blog.png" alt="blog" />
        </a>
        <p>https://gomdol97.tistory.com/</p>
      </div>
    </div>
  );
}
