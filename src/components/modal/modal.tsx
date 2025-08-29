"use client";
import Image from "next/image";
import styles from "./modal.module.css";

export default function Modal({
  setOpen,
  children,
}: {
  children: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.modal}>
        <div className={styles.close_btn} onClick={() => setOpen(false)}>
          <Image fill src="/icon/close.png" alt="close" />
        </div>
        <div className={styles.modal_content}>{children}</div>
      </div>
    </>
  );
}
