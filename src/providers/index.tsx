"use client";

import { useState, useEffect, ReactNode } from "react";
import { TamaguiProvider } from "tamagui";

import tamaguiConfig from "../../tamagui.config";

export const Providers = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>;
};
