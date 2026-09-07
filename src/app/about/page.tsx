import type { Metadata } from "next";
import PageHeader from "@/components/pageHeader/pageHeader";
import AboutMe from "@/sections/aboutMe/aboutMe";

export const metadata: Metadata = {
  title: "About Me | Sujin Jung Portfolio",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title="About Me"
        description="개발자로서 지향하는 가치와 보유한 기술 스택을 정리했습니다."
      />
      <AboutMe />
    </>
  );
}
