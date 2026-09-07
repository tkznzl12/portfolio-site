import type { Metadata } from "next";
import PageHeader from "@/components/pageHeader/pageHeader";
import Contact from "@/sections/contact/contact";

export const metadata: Metadata = {
  title: "Contact | Sujin Jung Portfolio",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title="Contact"
        description="편한 채널로 연락 주시면 빠르게 답변드리겠습니다."
      />
      <Contact />
    </>
  );
}
