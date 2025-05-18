
import React from "react";
import { CommitsGridDemo } from "@/components/ui/commits-grid-demo";

export const S10AISection = () => {
  return (
    <section className="bg-black py-12 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-6">
          <CommitsGridDemo />
        </div>
      </div>
    </section>
  );
};
