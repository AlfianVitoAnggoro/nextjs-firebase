'use client';
import React, { FC, useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';

interface NavigationPanelProps {
  pages: { name: string; href: string }[];
}

const NavigationPanel: FC<NavigationPanelProps> = ({ pages }) => {
  const [newPages, setNewPages] = useState(pages);
  useEffect(() => {
    if (pages.length > 3) {
      const addEllipsis = { name: '...', href: '...' };
      const dataPages = [...pages];
      dataPages.splice(1, 0, addEllipsis);
      setNewPages(newPages);
    }
  }, [pages]);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {newPages.map((item: any, i: number) => (
            <div key={i}>
              {newPages.length !== i + 1 ? (
                <div className="flex items-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.href}>
                      {item.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </div>
              ) : (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default NavigationPanel;
