import Header from "@/components/layout/Header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header bgColor={"bg-white"} />
      <div className="pt-[6.25rem]">
        {children}
      </div>
    </div>
  );
}
