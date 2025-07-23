import Header from "@/components/layout/Header";
import InquiryButton from "@/components/ui/InquiryButton";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default async function BlackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black text-white">
      <Header bgColor="bg-black" />
      <div>{children}</div>
      <InquiryButton bgColor="bg-[#1C1C1C]" textColor="text-white" />
      <ScrollToTopButton bgColor="bg-[#1C1C1C]" textColor="text-white" />
    </div>
  );
}
