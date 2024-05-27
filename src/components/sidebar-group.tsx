'use client';

import React from 'react';

export interface SidebarHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const SidebarGroup: React.FC<SidebarHeaderProps> = (props) => {
  return (
    <>
      <h2 className="px-4 pt-4 text-lg font-semibold tracking-tight">
        {props.title}
      </h2>
      {props.children}
    </>
  );
};
