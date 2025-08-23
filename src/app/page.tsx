import Image from "next/image";
import styles from "./page.module.css";
import Icon_Github from "./icon/github.svg";
import Link from "next/link";
import AboutMe from "./pages/aboutMe/aboutMe";
import Experience from "./pages/experience/experience";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={`${styles.main_section} ${styles.main1}`}>
          <div className={styles.main1_left}>
            <p className={styles.main_title}>안녕하세요, 정수진 입니다.</p>
            <pre className={styles.main_pre}>
              유지보수성과 사용자 친화적인 코드를 지향하며
              <br />
              어떤 기능이든 구현할 수 있도록 꾸준히 노력하는 프론트엔드
              개발자입니다.
            </pre>
          </div>
          <div className={styles.main1_right}>
            <div className={styles.profile_img}>
              <Image src="/images/profile.png" alt="profile" fill />
            </div>
          </div>
        </section>
        <section className={styles.main_section}>
          <p className={styles.section_title}>About Me</p>

          <AboutMe />
        </section>
        <section className={styles.main_section}>
          <p className={styles.section_title}>Skills</p>
          <pre>신성ICT</pre>
          <pre>샘랩</pre>
        </section>
        <section className={styles.main_section}>
          <p className={styles.section_title}>Experience</p>
          <Experience />
        </section>
        <section className={styles.main_section}>
          <p className={styles.section_title}>Projects</p>
        </section>
      </main>
      <footer className={styles.footer}>
        깃허브, 블로그 연동 버튼, 이메일 Icons by Icons8(링크연동하기)
        <section className={styles.footer_icons}>
          <Link
            className={styles.footer_icon}
            href="https://github.com/tkznzl12"
          >
            <Image src="/icon/github.png" alt="github" fill />
          </Link>
          <Link
            className={styles.footer_icon}
            href="https://gomdol97.tistory.com/"
          >
            <Image src="/icon/tistory.svg" alt="github" fill />
          </Link>
        </section>
      </footer>
    </div>
  );
}
