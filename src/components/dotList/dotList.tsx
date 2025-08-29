"use client";
import Modal from "../modal/modal";
import PeriodBox from "../periodBox/periodBox";
import WorkComponent from "../workComponent/workComponent";
import styles from "./dotList.module.css";
import { ExperienceTypes } from "@/types";
import { useState } from "react";

export default function DotList({
  workData,
  number,
}: {
  workData: ExperienceTypes;
  number: number;
}) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      {openModal && (
        <Modal setOpen={setOpenModal}>
          <WorkComponent />
        </Modal>
      )}
      <div className={styles.dot_list_component}>
        <div className={styles.dot_list_left}>
          <div className={styles.number}>{number}</div>
          <div className={styles.vertical_line} />
        </div>
        <div className={styles.dot_list_right}>
          <div className={styles.content_top}>
            <p className={styles.company_name}>{workData.companyName}</p>
            <PeriodBox date={workData.period} />
          </div>
          <div className={styles.content_middle}>
            <p className={styles.work_title}>{workData.position}</p>
          </div>
          <div className={styles.experience_content}>
            <div className={styles.skill_and_modal}>
              <div className={styles.skill_list}>
                {workData.skill.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
              {number !== 1 && (
                <button
                  className={styles.modal_btn}
                  onClick={() => setOpenModal(true)}
                >
                  개발노트
                </button>
              )}
            </div>
            {workData.mainJob.map((project, index: number) => (
              <div className={styles.job_list} key={`project${index}`}>
                <p className={styles.project_title}>{project.projectName}</p>
                <div className={styles.project_content}>
                  {project.job.map((job: string, i: number) => (
                    <p key={i}>⦁ {job}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
