import Notice from "@/components/(white)/support/notice/Notice";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const page = async ({ searchParams }: PageProps) => {
  const resolvedSearchParams = await searchParams;
  return <Notice searchParams={resolvedSearchParams} />;
};
export default page;
