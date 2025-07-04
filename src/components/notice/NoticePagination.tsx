import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BoardPaginationProps {
  currentPage: number;
  postPerPage: number;
  totalPosts: number;
  searchTerm: string;
}

const NoticePagination = ({
  currentPage,
  postPerPage,
  totalPosts,
  searchTerm,
}: BoardPaginationProps) => {

  let totalPages = 0;

  if (totalPosts) {
    totalPages = Math.ceil(totalPosts / postPerPage);
  }

  const getPageNumbers = () => {
    const pageNumbers = [];

    // 기본적으로 10개 페이지 표시 로직
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 5) {
        for (let i = 1; i <= 10; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 4) {
        for (let i = totalPages - 9; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 5; i <= currentPage + 4; i++) {
          pageNumbers.push(i);
        }
      }
    }
    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {searchTerm ? (
            <PaginationPrevious
              href={`?page=${
                currentPage - 1
              }&pageSize=${postPerPage}&searchTerm=${searchTerm}`}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          ) : (
            <PaginationPrevious
              href={`?page=${currentPage - 1}&pageSize=${postPerPage}`}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          )}
        </PaginationItem>

        {/* 모바일에서는 5개만 보이도록 CSS로 제어 */}
        <div className="hidden sm:flex">
          {getPageNumbers().map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              {searchTerm ? (
                <PaginationLink
                  href={`?page=${pageNumber}&searchTerm=${searchTerm}`}
                  isActive={currentPage === pageNumber}
                  className={
                    currentPage === pageNumber
                      ? "bg-[#78b237] text-white hover:bg-[#78b237]/90"
                      : ""
                  }
                >
                  {pageNumber}
                </PaginationLink>
              ) : (
                <PaginationLink
                  href={`?page=${pageNumber}`}
                  isActive={currentPage === pageNumber}
                  className={
                    currentPage === pageNumber
                      ? "bg-[#78b237] text-white hover:bg-[#78b237]/90"
                      : ""
                  }
                >
                  {pageNumber}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </div>

        {/* 모바일용 페이지네이션 */}
        <div className="flex sm:hidden">
          {getPageNumbers()
            .slice(
              Math.max(0, currentPage - 3),
              Math.min(currentPage + 2, totalPages),
            )
            .map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href={`?page=${pageNumber}&pageSize=${postPerPage}`}
                  isActive={currentPage === pageNumber}
                  className={
                    currentPage === pageNumber
                      ? "bg-[#78b237] text-white hover:bg-[#78b237]/90"
                      : ""
                  }
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}
        </div>

        <PaginationItem>
          {searchTerm ? (
            <PaginationNext
              href={`?page=${
                currentPage + 1
              }&pageSize=${postPerPage}&searchTerm=${searchTerm}`}
              aria-disabled={currentPage === totalPages || !totalPosts}
              className={
                currentPage === totalPages || !totalPosts
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          ) : (
            <PaginationNext
              href={`?page=${currentPage + 1}&pageSize=${postPerPage}`}
              aria-disabled={currentPage === totalPages || !totalPosts}
              className={
                currentPage === totalPages || !totalPosts
                  ? "pointer-events-none opacity-50"
                  : ""
              }
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default NoticePagination;