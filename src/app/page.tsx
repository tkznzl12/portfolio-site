import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { DevSkill, ProjectData, WorkInfo } from "@/data/arrayData";
import { ExperienceTypes, ProjectDataTypes } from "@/types";
import { formatMonths, parseCareerToMonths } from "@/utils/career";

export default function Home() {
  const totalMonths = WorkInfo.reduce(
    (acc, work) => acc + parseCareerToMonths(work.career),
    0
  );

  const stats = [
    { label: "총 경력", value: formatMonths(totalMonths) },
    { label: "재직 회사", value: `${WorkInfo.length}곳` },
    { label: "진행 프로젝트", value: `${ProjectData.length}건` },
    { label: "보유 기술", value: `${DevSkill.length}개` },
  ];

  return (
    <div className={styles.dashboard}>
      <section className={styles.hero}>
        <div className={styles.hero_text}>
          <p className={styles.hero_eyebrow}>
            &quot;한 걸음부터, 모든 변화가 시작된다.&quot;
          </p>
          <h1 className={styles.hero_title}>안녕하세요, 정수진입니다.</h1>
          <p className={styles.hero_desc}>
            유지보수성과 사용자 친화성을 중시하며, 새로운 기능도 책임감 있게
            구현하는 프론트엔드 개발자입니다.
          </p>
          <div className={styles.hero_actions}>
            <Link href="/projects" className={styles.primary_btn}>
              프로젝트 보기
            </Link>
            <Link href="/contact" className={styles.ghost_btn}>
              연락하기
            </Link>
          </div>
        </div>
        <div className={styles.hero_image}>
          <Image
            src="/images/profile.png"
            alt="정수진 프로필"
            fill
            sizes="(max-width: 900px) 60vw, 220px"
            priority
          />
        </div>
      </section>

      <section className={styles.stats}>
        {stats.map((stat) => (
          <div className={styles.stat} key={stat.label}>
            <p className={styles.stat_label}>{stat.label}</p>
            <p className={styles.stat_value}>{stat.value}</p>
          </div>
        ))}
      </section>

      <div className={styles.widgets}>
        <section className={styles.widget}>
          <div className={styles.widget_head}>
            <p className={styles.widget_title}>경력 요약</p>
            <Link href="/experience" className={styles.more_link}>
              전체 보기
            </Link>
          </div>
          <div className={styles.career_list}>
            {WorkInfo.map((work: ExperienceTypes, index: number) => (
              <div className={styles.career_item} key={work.companyName}>
                <span className={styles.career_badge}>
                  {WorkInfo.length - index}
                </span>
                <div>
                  <p className={styles.career_company}>{work.companyName}</p>
                  <p className={styles.career_meta}>
                    {work.position} · {work.period} ({work.career})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.widget}>
          <div className={styles.widget_head}>
            <p className={styles.widget_title}>기술 스택</p>
            <Link href="/about" className={styles.more_link}>
              자세히
            </Link>
          </div>
          <div className={styles.chips}>
            {DevSkill.map((skill: string) => (
              <span className={styles.chip} key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className={`${styles.widget} ${styles.widget_wide}`}>
          <div className={styles.widget_head}>
            <p className={styles.widget_title}>최근 프로젝트</p>
            <Link href="/projects" className={styles.more_link}>
              전체 보기
            </Link>
          </div>
          <div className={styles.project_grid}>
            {ProjectData.slice(0, 3).map(
              (project: ProjectDataTypes, index: number) => (
                <div className={styles.project_card} key={`preview_${index}`}>
                  <p className={styles.project_name}>{project.projectName}</p>
                  <p className={styles.project_period}>{project.period}</p>
                  <p className={styles.project_explan}>{project.explanation}</p>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
