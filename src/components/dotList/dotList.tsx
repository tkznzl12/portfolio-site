import styles from "./dotList.module.css";

export default function DotList() {
  return (
    <div className={styles.dot_list_component}>
      <div className={styles.dot_list_left}>
        <div className={styles.number}>1</div>
        <div className={styles.vertical_line} />
      </div>

      <div className={styles.dot_list_right}>
        <div className={styles.content_top}>
          <p className={styles.company_name}>신성ICT</p>
          <div className={styles.company_date}>2023.12 - 2024.09</div>
        </div>
        <div className={styles.content_middle}>
          <p className={styles.work_title}>프론트엔드 개발자</p>
          <p className={styles.work_content}>
            자체 서비스 웹, 키오스크 프로그램 개발
          </p>
        </div>
        <div className={styles.experience_content}>
          - 공간샘스터디카페(렛미업) 유지보수 및 프론트개발 (2021.09~2023.06
          기여도 60%) - JavaScript, React, CSS, cuba Template, electron ... -
          렛미업 백오피스 유지보수 및 개발 - 관리자,고객 페이지 작업 - 채널톡
          연동 - 세미나실 예약페이지 작업 - hecto, tosspayments를 사용한 온라인
          결제 작업 - 여러 객체의 변경 및 이동이 가능한 맵뷰어 작업 -
          react라이브러리를 이용한 데이터 그래프 출력 작업 - ajex를 이용한 API
          연동을 통한 CRUD 프론트 개발 - 렛미업 키오스크 유지보수 및 개발 -
          세미나실 예약페이지 작업 - daouVP, KIS, KCP 연동을 통한 결제 flow 개편
          및 작업 - 키오스크의 main 작업 - 약 90개 지점의 키오스크 유지보수
        </div>
      </div>
    </div>
  );
}
