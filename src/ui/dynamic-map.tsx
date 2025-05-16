"use client";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/ui/map"), {
  ssr: false,
});

export default DynamicMap;
