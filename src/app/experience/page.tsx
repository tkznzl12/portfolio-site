import type { Metadata } from "next";
import PageHeader from "@/components/pageHeader/pageHeader";
import Experience from "@/sections/experience/experience";

export const metadata: Metadata = {
  title: "Experience | Sujin Jung Portfolio",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title="Experience"
        description="재직했던 회사에서 수행한 업무와 사용 기술입니다. 각 항목의 개발노트에서 상세 과정을 확인할 수 있습니다."
      />
      <Experience />
    </>
  );
}
