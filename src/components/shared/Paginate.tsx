import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

const Paginate = ({ page, pages }: { page: number; pages: number }) => {
  return (
    pages > 1 && (
      <Pagination>
        <PaginationContent>
          {[...Array(pages).keys()].map((x) => (
            <PaginationItem key={x + 1}>
              <PaginationLink to={`/admin/products/${x + 1}`} isActive={x + 1 === page}>
                {x + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    )
  );
};

export { Paginate };
