
import React from "react";
import { CommitsGridDemo } from "@/components/ui/commits-grid-demo";

export const S10AISection = () => {
  return (
    <section className="bg-black py-12 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-6">
          <CommitsGridDemo />
        </div>
        <p className="text-center text-xl">
          <span className="text-white font-medium">Making Life Easy</span>
          <span className="text-gray-400"> For Clinicians</span>
        </p>
      </div>
    </section>
  );
};
