
import React from "react";
import { Helmet } from "react-helmet-async";
import { AdvantagesContent } from "@/components/advantages/AdvantagesContent";

const Advantages = () => {
  return (
    <>
      <Helmet>
        <title>The S10.AI Difference | Transformative Healthcare AI Solutions</title>
        <meta name="description" content="Discover the 5 core advantages that set S10.AI apart, including our proprietary IPKO™ engine, comprehensive automation, uncompromising data privacy, universal EHR compatibility, and physician-centric AI." />
      </Helmet>
      <AdvantagesContent />
    </>
  );
};

export default Advantages;
