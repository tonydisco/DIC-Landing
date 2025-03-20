import React from "react";
import { Metadata } from "next";
import { SHORT_DESCRIPTION } from "@/utils";
import ContactUs from "@/components/Contact";

export const metadata: Metadata = {
  title: "DIC | Thông tin liên hệ",

  // other metadata
  description: SHORT_DESCRIPTION,
};

const SupportPage = () => {
  return (
    <section className="mx-auto max-w-c-1390 pb-20 pt-30">
      <ContactUs />
    </section>
  );
};

export default SupportPage;
