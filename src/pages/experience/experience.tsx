"use client";
import DotList from "@/components/dotList/dotList";
import styles from "./experience.module.css";
import { WorkInfo } from "@/data/arrayData";
import { ExperienceTypes } from "@/types";
import { useState } from "react";

export default function Experience() {
  // const [openModal, setOpenModal] = useState();
  return (
    <div className={styles.experience_list}>
      {WorkInfo.map((work: ExperienceTypes, index: number) => (
        <DotList
          number={WorkInfo.length - index}
          workData={work}
          key={`work${index}`}
        />
      ))}
    </div>
  );
}
