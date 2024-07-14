'use client';

import { Table as ReactTable, flexRender } from '@tanstack/react-table';
import React from 'react';
import { Button } from './ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Skeleton } from './ui/skeleton';

export interface PaginationTableProps<T> {
  title: string;
  table: ReactTable<T>;
  isLoading?: boolean;
}

export function PaginationTable<T>(props: PaginationTableProps<T>) {
  const rows = props.table.getRowModel().rows;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
        <h1 className="w-full font-bold text-xl p-2">{props.title}</h1>
        <Table>
          <TableHeader>
            {props.table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div className="flex flex-col">
                        {/* <input className='w-16'
                          onChange={(event) => {
                            header.column.setFilterValue(event.target.value);
                          }}
                        /> */}
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {props.isLoading
              ? [...Array(10)].map((_, i) => (
                  <TableRow key={i}>
                    {[...Array(3)].map((_, j) => (
                      <TableCell key={j}>
                        <Skeleton className="h-6" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <div className="flex gap-1">
          <Button
            onClick={props.table.previousPage}
            variant="outline"
            disabled={!props.table.getCanPreviousPage()}
          >
            이전
          </Button>
          <Button
            onClick={props.table.nextPage}
            variant="outline"
            disabled={!props.table.getCanNextPage()}
          >
            다음
          </Button>
        </div>
      </div>
    </>
  );
}
