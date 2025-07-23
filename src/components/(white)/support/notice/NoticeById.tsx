import { dynamicFetchPost } from "../../../../lib/api";
import NoticeDetail from "./NoticeDetail";

const NoticeById = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  const { detailPost } = await dynamicFetchPost(id);

  return <NoticeDetail post={detailPost} />;
};
export default NoticeById;