import { dynamicFetchPost } from "@/lib/api";
import NoticePatchForm from "./NoticePatchForm";

const NoticePatch = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const { detailPost } = await dynamicFetchPost(id);

  return (
    <div className="py-[6.25rem]">
      <div className="mb-b mb-[5rem] pt-16 text-center text-2xl font-bold underline underline-offset-[1rem] sm:text-4xl">
        수정하기
      </div>
      <div className="mx-auto max-w-xs space-y-5 md:max-w-2xl lg:max-w-6xl">
        <NoticePatchForm id={String(id)} />
      </div>
    </div>
  );
};
export default NoticePatch;