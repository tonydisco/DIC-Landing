import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { SHORT_DESCRIPTION } from "@/utils";

export const metadata: Metadata = {
  title: "DIC | Giới thiệu",

  // other metadata
  description: SHORT_DESCRIPTION,
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-30">
      <Contact />
    </div>
  );
};

export default SupportPage;
