import Header from "@/components/Header";
import InquiryButton from "@/components/InquiryButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default async function WhiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white text-black">
      <Header bgColor={"bg-white"} />
      <div className="pt-[6.25rem]">{children}</div>
      <InquiryButton bgColor="bg-neutral-100" textColor="text-black" />
      <ScrollToTopButton bgColor="bg-neutral-100" textColor="text-black" />
    </div>
  );
}
