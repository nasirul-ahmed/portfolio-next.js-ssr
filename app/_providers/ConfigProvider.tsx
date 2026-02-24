"use client";

import { createContext, useContext } from "react";

const ConfigContext = createContext<any>(null);

export default function ConfigProvider({ config, children }: any) {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig must be used within ConfigProvider");
  return context;
}
