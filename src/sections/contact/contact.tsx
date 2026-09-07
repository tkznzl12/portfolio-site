import Image from "next/image";
import styles from "./contact.module.css";

const CONTACTS = [
  {
    icon: "/icon/phone.png",
    label: "Phone",
    value: "010-2994-8392",
    href: "tel:01029948392",
    external: false,
  },
  {
    icon: "/icon/email.png",
    label: "Email",
    value: "tkznzl12@naver.com",
    href: "mailto:tkznzl12@naver.com",
    external: false,
  },
  {
    icon: "/icon/github.png",
    label: "GitHub",
    value: "github.com/tkznzl12",
    href: "https://github.com/tkznzl12",
    external: true,
  },
  {
    icon: "/icon/blog.png",
    label: "Blog",
    value: "gomdol97.tistory.com",
    href: "https://gomdol97.tistory.com/",
    external: true,
  },
];

export default function Contact() {
  return (
    <div className={styles.contact_grid}>
      {CONTACTS.map((contact) => (
        <a
          key={contact.label}
          className={styles.contact_card}
          href={contact.href}
          {...(contact.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <span className={styles.icon}>
            <Image
              width={22}
              height={22}
              src={contact.icon}
              alt={contact.label}
            />
          </span>
          <span className={styles.text}>
            <span className={styles.label}>{contact.label}</span>
            <span className={styles.value}>{contact.value}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
