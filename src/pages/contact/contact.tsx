import Image from "next/image";
import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div className={styles.contact_component}>
      <div className={styles.contact_item}>
        <Image width={30} height={30} src="/icon/phone.png" alt="phone" />
        <p>010-2994-8392</p>
      </div>
      <div className={styles.contact_item}>
        <Image width={30} height={30} src="/icon/email.png" alt="email" />
        <p> tkznzl12@naver.com</p>
      </div>
      <div className={styles.contact_item}>
        <Image width={30} height={30} src="/icon/github.png" alt="github" />
        <p>https://github.com/tkznzl12</p>
      </div>
      <div className={styles.contact_item}>
        <Image width={30} height={30} src="/icon/blog.png" alt="blog" />
        <p>https://gomdol97.tistory.com/</p>
      </div>
    </div>
  );
}
