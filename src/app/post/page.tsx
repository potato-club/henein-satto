'use client';

import { useEffect, useState } from 'react';

import {
  ColumnFiltersState,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useDebounce } from '@/hooks/use-debounce';
import {
  BoardResponseDto,
  PageCharacterResponseDto,
} from '@/models/data-contracts';
import { PaginationTable } from '@/components/pagination-table';
import { Board } from '@/models/Board';

const columnHelper = createColumnHelper<BoardResponseDto>();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('typeName', {
    cell: (info) => info.getValue(),
    header: '게시판',
  }),
  columnHelper.accessor('title', {
    cell: (info) => info.getValue(),
    header: '제목',
  }),
  columnHelper.accessor('userName', {
    cell: (info) => info.getValue(),
    header: '작성자',
  }),
  columnHelper.accessor('text', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '내용',
  }),
  columnHelper.accessor('views', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '조회수',
  }),
  columnHelper.accessor('likes', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '좋아요',
  }),
  columnHelper.accessor('createdDate', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '작성 일자',
  }),
  columnHelper.accessor('modifiedDate', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '수정 일자',
  }),
];

export default function PostPage() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 100 });
  const [data, setData] = useState<PageCharacterResponseDto>();
  const [isLoading, setIsLoading] = useState(true);

  const debouncedColumnFilters = useDebounce(columnFilters, 300);

  useEffect(() => {
    setIsLoading(true);

    new Board({})
      .searchUserInfoUsingGet({
        page: pagination.pageIndex + 1,
        ...debouncedColumnFilters.reduce(
          (acc, cur) => {
            acc[cur.id] = cur.value;
            return acc;
          },
          {} as Record<string, unknown>
        ),
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
  }, [debouncedColumnFilters, pagination.pageIndex]);

  const table = useReactTable({
    columns,
    data: data?.content ?? [],
    pageCount: data?.totalPages,
    getCoreRowModel: getCoreRowModel(),
    manualFiltering: true,
    manualPagination: true,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    state: {
      columnFilters,
      pagination,
    },
  });

  return (
    <>
      <PaginationTable title="게시글" table={table} isLoading={isLoading} />
    </>
  );
}
