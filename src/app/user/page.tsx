'use client';

import { useEffect, useState } from 'react';

import {
  ColumnFiltersState,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useDebounce } from '@/hooks/use-debounce';
import { PaginationTable } from '@/components/pagination-table';
import { Board } from '@/models/Board';
import { PageUserInfoResponse, UserInfoResponse } from '@/models/data-contracts';
import { User } from '@/models/User';

const columnHelper = createColumnHelper<UserInfoResponse>();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('userName', {
    cell: (info) => info.getValue(),
    header: '닉네임',
  }),
  columnHelper.accessor('userEmail', {
    cell: (info) => info.getValue(),
    header: '이메일',
  }),
  columnHelper.accessor('pickCharName', {
    cell: (info) => info.getValue(),
    header: '대표 캐릭터',
  }),
  columnHelper.accessor('banedInfo', {
    cell: (info) => info.getValue(),
    header: '최근 제재',
  }),
  columnHelper.accessor('userRole', {
    cell: (info) => info.getValue(),
    header: '권한',
  }),
  columnHelper.accessor('createDateTime', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '가입 일자',
  }),
];

export default function PostPage() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 100 });
  const [data, setData] = useState<PageUserInfoResponse>();

  const debouncedColumnFilters = useDebounce(columnFilters, 300);

  useEffect(() => {
    new User({})
      .searchUserInfoUsingGet2({
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
      <PaginationTable title="유저" table={table} />
    </>
  );
}
