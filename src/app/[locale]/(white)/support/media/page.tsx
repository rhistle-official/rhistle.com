import Media from "@/components/(white)/support/media/Media";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const page = async ({ searchParams }: PageProps) => {
  const resolvedSearchParams = await searchParams;

  return <Media searchParams={resolvedSearchParams} />;
};
export default page;
