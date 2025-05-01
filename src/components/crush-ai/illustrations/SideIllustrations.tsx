
import React, { memo } from "react";
import { LazyLoad } from "@/components/ui/lazy-load";
import { EMRChartIllustration } from "./EMRChartIllustration";
import { CliniciansIllustration } from "./CliniciansIllustration";
import { ROICalculatorIllustration } from "./ROICalculatorIllustration";
import { DoctorBurnoutIllustration } from "./DoctorBurnoutIllustration";

export const SideIllustrations = memo(() => {
  return (
    <div className="flex flex-col gap-6">
      <LazyLoad threshold={0.2}>
        <EMRChartIllustration />
      </LazyLoad>
      <LazyLoad threshold={0.2}>
        <CliniciansIllustration />
      </LazyLoad>
      <LazyLoad threshold={0.2}>
        <ROICalculatorIllustration />
      </LazyLoad>
      <LazyLoad threshold={0.2}>
        <DoctorBurnoutIllustration />
      </LazyLoad>
    </div>
  );
});

SideIllustrations.displayName = 'SideIllustrations';
