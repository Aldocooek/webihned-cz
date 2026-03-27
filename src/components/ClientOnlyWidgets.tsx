"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const LiveChat = dynamic(() => import("@/components/LiveChat"), { ssr: false });

export default function ClientOnlyWidgets() {
  return (
    <>
      <CustomCursor />
      <LiveChat />
    </>
  );
}
