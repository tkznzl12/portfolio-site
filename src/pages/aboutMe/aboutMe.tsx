import { DevSkill } from "@/data/arrayData";
import styles from "./aboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.text_section}>
      {/* 자기소개 */}
      <div className={styles.about_me_component}>
        <div className={styles.introduce_text}>
          <p>안녕하세요. 프론트엔드 개발자 정수진입니다. </p>
          <p>
            협업 과정에서 이해하기 쉬운 코드를 작성하며 소통 능력을 키웠고,
            책임감 있게 프로젝트를 완수하는 것을 중요하게 생각합니다. <br />
          </p>
          <p>
            유지보수성과 사용자 친화성을 고려하며, 어떤 기능이든 안정적으로
            구현할 수 있도록 꾸준히 노력하고 있습니다.
          </p>
        </div>
        {/* 개발철학 */}
        <div className={styles.dev_philosophy}>
          <p className={styles.dev_philosophy_title}>개발 철학</p>
          <div>
            <p>• 이해하기 쉽고 유지보수 가능한 코드를 작성하기</p>
            <p>• 협업 과정에서 적극적으로 소통하며 팀과 함께 성장하기</p>
            <p>
              • 새로운 기술을 학습하고 프로젝트에 적용하며 역량을 향상시키기
            </p>
          </div>
        </div>
      </div>
      {/* 사용기술 */}
      <div className={styles.skills}>
        <p className={styles.skill_title}>Skills</p>
        <div className={styles.skill_list}>
          {DevSkill.map((skill: string, index: number) => (
            <div key={`dev_skill_${index}`} className={styles.skill_icon}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
