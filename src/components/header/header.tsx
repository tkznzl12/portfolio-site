"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrolled(currentScroll > 0);
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header_container} ${hidden ? styles.hide : ""} ${
        scrolled ? styles.background : ""
      }`}
    >
      <div className={styles.header_list}>
        <a href="#aboutMe">About Me</a>
        <a href="#experience">Experience</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}
