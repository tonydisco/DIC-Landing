import React from "react";

export type Brand = {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight: string;
  classExtend?: string;
  styleExtend?: React.CSSProperties;
};
