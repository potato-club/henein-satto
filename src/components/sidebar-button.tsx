'use client';

import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

export interface SidebarButtonProps {
  children?: React.ReactNode;
  href?: string;
}

export const SidebarButton: React.FC<SidebarButtonProps> = (props) => {
  const pathname = usePathname();

  return (
    <Link href={props.href ?? ''}>
      <Button
        className="px-6 w-full justify-start"
        variant={props.href == pathname ? 'secondary' : 'ghost'}
      >
        {props.children}
      </Button>
    </Link>
  );
};
