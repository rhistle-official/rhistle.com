import Header from "@/components/layout/Header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white text-black">
      <Header bgColor={"bg-white"} />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#f4f7ec]">
        {children}
      </div>
    </div>
  );
}