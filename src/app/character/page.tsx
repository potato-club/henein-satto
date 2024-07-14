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
  CharacterResponseDto,
  PageCharacterResponseDto,
} from '@/models/data-contracts';
import { Character } from '@/models/Character';
import { PaginationTable } from '@/components/pagination-table';

const columnHelper = createColumnHelper<CharacterResponseDto>();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: 'avatar',
    cell: (info) => (
      <img
        style={{ imageRendering: 'pixelated' }}
        src={info.row.original.avatar}
        alt={''}
      />
    ),
  }),
  columnHelper.accessor('charName', {
    cell: (info) => info.getValue(),
    header: '닉네임',
  }),
  columnHelper.accessor('level', {
    cell: (info) => info.getValue(),
    header: '레벨',
  }),
  columnHelper.accessor('job', {
    cell: (info) => info.getValue(),
    header: '직업',
  }),
  columnHelper.accessor('world', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '월드',
  }),
  columnHelper.accessor('userName', {
    cell: (info) => info.getValue(),
    header: '연동 유저',
  }),
  columnHelper.accessor('modifiedDate', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '마지막 갱신',
  }),
  columnHelper.accessor('banedInfo', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    header: '활동 정지',
  }),
];

export default function CharacterPage() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 100 });
  const [data, setData] = useState<PageCharacterResponseDto>();

  const debouncedColumnFilters = useDebounce(columnFilters, 300);

  useEffect(() => {
    new Character({})
      .searchUserInfoUsingGet1({
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
      <PaginationTable title="캐릭터" table={table} />
    </>
  );
}
