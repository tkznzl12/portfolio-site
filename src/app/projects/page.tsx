import type { Metadata } from "next";
import PageHeader from "@/components/pageHeader/pageHeader";
import Projects from "@/sections/projects/projects";

export const metadata: Metadata = {
  title: "Projects | Sujin Jung Portfolio",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title="Projects"
        description="개인 및 팀 단위로 진행한 프로젝트와 담당 역할입니다."
      />
      <Projects />
    </>
  );
}
