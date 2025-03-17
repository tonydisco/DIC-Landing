import React from "react";
import { Metadata } from "next";
import { SHORT_DESCRIPTION } from "@/utils";

export const metadata: Metadata = {
  title: "DIC | Quan hệ cổ đông",

  // other metadata
  description: SHORT_DESCRIPTION,
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-30">
      <div className="h-[100vh] w-full py-6">
        <div className="relative h-full w-full">
          <iframe
            src="https://ezir.fpts.com.vn/ThongTinDoanhNghiepclient/DID"
            title="qhcd"
            width="100%"
            height="100%"
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
