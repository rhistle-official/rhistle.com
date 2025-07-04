import Notice from "@/components/Notice";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const page = async ({ searchParams }: PageProps) => {
  const resolvedSearchParams = await searchParams;
  return <Notice searchParams={resolvedSearchParams} />;
};
export default page;
