
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export const SectionLoader = () => (
  <div className="w-full py-12 md:py-16">
    <div className="max-w-[1400px] mx-auto px-4 md:px-8">
      <Skeleton className="h-8 w-[250px] mb-6" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-full max-w-[600px]" />
        <Skeleton className="h-4 w-full max-w-[500px]" />
        <Skeleton className="h-4 w-full max-w-[400px]" />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-[200px] rounded-lg" />
        ))}
      </div>
    </div>
  </div>
);
