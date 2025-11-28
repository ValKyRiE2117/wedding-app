"use client";

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

export function PreventScrolling() {
  useLayoutEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden"); // cleanup
    };
  }, []);

  return null;
}

export function RouterBack() {
  const router = useRouter();

  return <div className="absolute inset-0 z-10"></div>;
}
