
import React from "react";
import { CommitsGrid } from "@/components/ui/commits-grid";

export const S10AISection = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-6 w-full max-w-xl">
          <CommitsGrid text="S10.AI" />
        </div>
        <p className="text-center mt-4 text-xl">
          <span className="text-gray-400">Making Life Easy For Clinicians</span>
        </p>
      </div>
    </section>
  );
};
