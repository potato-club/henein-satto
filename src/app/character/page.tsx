'use client';

import { useState } from 'react';

import { CharacterResponseDto } from '@/apis';
import {
  ColumnFiltersState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useApi } from '@/hooks/use-api';
import { useDebounce } from '@/hooks/use-debounce';

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
  }),
  columnHelper.accessor('level', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('job', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('world', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  }),
  columnHelper.accessor('userName', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('modifiedDate', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  }),
  columnHelper.accessor('banedInfo', {
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  }),
];

export default function CharacterPage() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 100 });

  const debouncedColumnFilters = useDebounce(columnFilters, 300);

  const { data } = useApi('character/search', {
    page: pagination.pageIndex + 1,
    ...debouncedColumnFilters.reduce(
      (acc, cur) => {
        acc[cur.id] = cur.value;
        return acc;
      },
      {} as Record<string, unknown>
    ),
  });

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
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        Character
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <input
                          style={{ width: 60 }}
                          onChange={(event) => {
                            header.column.setFilterValue(event.target.value);
                          }}
                        />
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={table.previousPage}>이전</button>
        <button onClick={table.nextPage}>다음</button>
      </div>
    </>
  );
}
