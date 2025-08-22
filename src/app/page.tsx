import Image from "next/image";
import styles from "./page.module.css";
import Icon_Github from "./icon/github.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.main_section}>
          안녕하세요. 프론트엔드 개발자 정수진 입니다.
        </section>
        <section className={styles.main_section}>
          <p>&quot;한 걸음부터, 모든 변화가 시작된다.&quot;</p>
        </section>
        <section className={styles.main_section}>
          <p>경력</p>
          <pre>신성ICT</pre>
          <pre>샘랩</pre>
        </section>
        <section className={styles.main_section}>프로젝트</section>
      </main>
      <footer className={styles.footer}>
        깃허브, 블로그 연동 버튼, 이메일 Icons by Icons8(링크연동하기)
        <section className={styles.footer_icons}>
          <Link
            className={styles.footer_icon}
            href="https://github.com/tkznzl12"
          >
            <Image src="/icon/github.svg" alt="github" fill />
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
